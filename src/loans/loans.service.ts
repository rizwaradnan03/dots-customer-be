import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private readonly prisma: PrismaService) { }

  async topupLoan(loanId: string,
    data: {
      amount: number,
      tenor: number,
      reason: string
    }) {

    const loan = await this.prisma.loans.findUnique({
      where: { id: loanId }
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: loan.customerId }
    })

    const createLoanOpening = await this.prisma.loan_opening_application.create({
      data: {
        amount: data.amount,
        tenor: data.tenor,
        reason: data.reason,
        loanId: loan.id
      }
    })

    const updatedLoan = await this.prisma.loans.update({
      where: { id: loanId },
      data: {
        loan: loan.loan + createLoanOpening.amount
      }
    })

    await this.prisma.notifications.create({
      data: {
        customersId: findUser.id,
        status: 1,
        message: "Customer a.n " + (findUser).fullName + "Berhasil Melakukan Top-Up Kredit!"
      }
    })

    const interestPerMonth = updatedLoan.loan * 0.03
    const monthlyInstallment = (updatedLoan.loan + interestPerMonth) / createLoanOpening.tenor
    const currentDate = new Date()

    const paymentSchedule = []
    for (let i = 0; i < createLoanOpening.tenor; i++) {
      const paymentDate = new Date(currentDate);
      paymentDate.setMonth(currentDate.getMonth() + i);
      paymentSchedule.push({
        loanId: updatedLoan.id,
        paymentDate,
        totalAmount: updatedLoan.loan + interestPerMonth,
        amount: monthlyInstallment,
        interest: interestPerMonth,
        penalty: 0
      });
    }

    await this.prisma.loan_installment.createMany({
      data: paymentSchedule
    })

    return (updatedLoan)
  }
  
  async create(createLoanDto: CreateLoanDto) {
    return await this.prisma.loans.create({
      data: createLoanDto
    })
  }

  async findAll() {
    return await this.prisma.loans.findMany({
      include: {
        tenant: {
          select: {
            name: true
          }
        }
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
}
