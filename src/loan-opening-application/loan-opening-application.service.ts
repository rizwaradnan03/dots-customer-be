import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { loanOpeningDto } from './dto/update-loan-opening-application.dto';

@Injectable()
export class LoanOpeningApplicationService {
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

    return await this.prisma.notifications.create({
      data: {
        customersId: findUser.id,
        status: 1,
        message: "Customer a.n " + (findUser).fullName + "Berhasil Melakukan Top-Up Kredit!"
      }
    })

    return (updatedLoan)
  }

  async findAll() {
    return await this.prisma.loan_opening_application.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.loan_opening_application.findUnique({
      where: { id }
    })
  }

  async update(id: string, updateLoanOpeningDto: loanOpeningDto) {
    return await this.prisma.loan_opening_application.update({
      where: { id },
      data: updateLoanOpeningDto
    })
  }

  async remove(id: string) {
    return await this.prisma.loan_opening_application.delete({
      where: { id }
    })
  }
}
