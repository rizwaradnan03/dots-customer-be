import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";

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
    console.log(loan)
    const loanOpening = await this.prisma.loan_opening_application.create({
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
        loan: loan.loan + loanOpening.amount
      }
    })

    return (updatedLoan)
  }

  async findAll() {
    return await this.prisma.loan_opening_application.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} loanOpeningApplication`;
  }

  // update(id: number, updateLoanOpeningApplicationDto: UpdateLoanOpeningApplicationDto) {
  //   return `This action updates a #${id} loanOpeningApplication`;
  // }

  remove(id: number) {
    return `This action removes a #${id} loanOpeningApplication`;
  }
}
