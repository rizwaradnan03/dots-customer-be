import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private readonly prisma: PrismaService) { }

  async topupLoan(loanId: string, data: { amount: number, tenor: number, reason: string }) {

    ///find loan
    const loan = await this.prisma.loans.findUnique({
      where: { id: loanId }
    })

    if (!loan) {
      return new UnauthorizedException()
    }

    ///find customer
    const customer = await this.prisma.customers.findFirst({
      where: { id: loan.customerId }
    })

    ///create loan opening
    const loanOpening = await this.prisma.loan_opening_application.create({
      data: {
        amount: data.amount,
        tenor: data.tenor,
        reason: data.reason,
        loanId
      }
    })

    const updatedLoan = await this.prisma.loans.update({
      where: { id: loanId },
      data: {
        loan: loan.loan + loanOpening.amount
      }
    })

    const interestPerMonth = updatedLoan.loan * 0.03
    const monthlyInstallment = (updatedLoan.loan + interestPerMonth) / loanOpening.tenor
    const currentDate = new Date()
    const paymentSchedule = []

    for (let i = 1; i <= loanOpening.tenor; i++) {
      const paymentDate = new Date(currentDate);
      paymentDate.setMonth(currentDate.getMonth() + i);
      console.log(i)
      paymentSchedule.push({
        loanId: updatedLoan.id,
        loanOpeningId: loanOpening.id,
        paymentDate,
        totalAmount: updatedLoan.loan + interestPerMonth,
        amount: monthlyInstallment,
        interest: interestPerMonth,
        penalty: 0,
        payment: i
      });
    }

    console.log(paymentSchedule)

    const loanInstallment = await this.prisma.loan_installment.createMany({
      data: paymentSchedule
    })

    const notifications = await this.prisma.notifications.create({
      data: {
        customerId: customer.id,
        status: 1,
        message: "Customer " + customer.fullName + " Berhasil Melakukan Top-Up Kredit sebesar Rp. " + loanOpening.amount + " jangan lupa bayar tepat waktu ya pak / Bu " + customer.fullName,
        loanId
      }
    })
    return { loan: updatedLoan, loanInstallment: loanInstallment }
  }

  async create(createLoanDto: CreateLoanDto, customerId: string, tenantId: number) {
    const customer = await this.prisma.customers.findUnique({
      where: { id: customerId }
    })

    const crypto = require('crypto');

    function generateRandomInt() {
      return crypto.randomBytes(4).readUInt32LE(0);
    }

    const randomInt = generateRandomInt().toString();

    const loan = await this.prisma.loans.create({
      data: {
        ...createLoanDto,
        customerId,
        accountNumber: randomInt,
        tenantId
      }
    })

    const loanRes = await this.prisma.loan_res_application.create({
      data: {
        loanId: loan.id
      }
    })

    await this.prisma.notifications.create({
      data: {
        customerId,
        status: 1,
        message: "Customer " + customer.fullName + " Berhasil Membuat Akun Kredit!",
      }
    })

    return loan
  }

  async findAll(customerId: string) {
    return await this.prisma.loans.findMany({
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      },
      where: { customerId }
    })
  }

  async findAllByTenant(customerId: string, tenantId: number) {
    return await this.prisma.loans.findMany({
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      },
      where: {
        AND: [
          {
            customerId: customerId
          },
          {
            tenantId: tenantId
          }
        ]
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.loans.findFirst({
      where: { id },
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      }
    })
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }

  ///loan res
  async updateLoanRes(customerId: string, loanId: string, data: { type: string, description: string }) {
    const loanRes = await this.prisma.loan_res_application.findFirst({
      where: { loanId: loanId }
    })
    console.log(loanRes)
    console.log(loanRes.id)

    const loanResUpdated = await this.prisma.loan_res_application.update({
      where: { id: loanRes.id },
      data: {
        type: data.type,
        description: data.description,
        loanId
      }
    })

    const customer = await this.prisma.customers.findFirst({
      where: { id: customerId }
    })

    await this.prisma.notifications.create({
      data: {
        customerId,
        status: 1,
        message: "Customer " + customer.fullName + " Berhasil Mengajukan Restruksurisasi!",
        loanId
      }
    })

    return loanResUpdated
  }
}
