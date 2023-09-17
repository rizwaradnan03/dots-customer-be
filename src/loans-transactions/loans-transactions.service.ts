import { Injectable } from '@nestjs/common';
import { CreateLoansTransactionDto } from './dto/create-loans-transaction.dto';
import { UpdateLoansTransactionDto } from './dto/update-loans-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoansTransactionsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createLoansTransactionDto: CreateLoansTransactionDto) {
    return 'This action adds a new loansTransaction';
  }

  async recordTopupLoan(
    loanId: string,
    amount: number
  ) {
    const findLoan = await this.prisma.loans.findFirst({
      where: { id: loanId }
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: findLoan.id },
      select: { userId: true }
    })

    const loanTransaction = await this.prisma.loan_transactions.create({
      data: {
        penaltyPaid: amount,
        interestPaid: amount,
        principalPaid: amount,
        createdBy: findUser.userId
      }
    })
    return loanTransaction
  }

  findAll() {
    return `This action returns all loansTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loansTransaction`;
  }

  update(id: number, updateLoansTransactionDto: UpdateLoansTransactionDto) {
    return `This action updates a #${id} loansTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} loansTransaction`;
  }
}
