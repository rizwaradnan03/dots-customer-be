import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { format } from 'date-fns'

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) { }

  async recordDeposit(
    savingId: string,
    amount: number,
  ) {
    const findSaving = await this.prisma.savings.findFirst({
      where: { id: savingId }
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: findSaving.customerId },
    })

    const findTenant = await this.prisma.tenants.findFirst({
      where: { id: findSaving.tenantId }
    })

    const transaction = await this.prisma.transactions.create({
      data: {
        savingId,
        amount,
        transactionType: 1,
        status: 1,
        createdBy: findUser.userId,
        tenantId: findTenant.id
      }
    })

    switch (transaction.transactionType) {
      case 1:
        return await this.prisma.transactions.update({ where: { id: transaction.id }, data: { title: "jfsdjfkjsdfjdls" } })
    }

    return transaction
  }

  async recordTopupLoan(loanId: string, amount: number) {
    const findLoan = await this.prisma.loans.findFirst({
      where: { id: loanId }
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: findLoan.customerId },
    })

    const findTenant = await this.prisma.tenants.findFirst({
      where: { id: findLoan.tenantId }
    })

    const transaction = await this.prisma.transactions.create({
      data: {
        loanId,
        amount,
        transactionType: 1,
        status: 1,
        createdBy: findUser.userId,
        tenantId: findTenant.id
      }
    })

    // switch(transaction.transactionType) {
    //   case 1:
    //     return await this.prisma.transactions.update({where: {id: transaction.id}, data: {title: "jfsdjfkjsdfjdls"}})
    // }

    return transaction
  }


  async findAll() {
    const transaction = await this.prisma.transactions.findMany()

    return transaction.map(transaction => ({
      id: transaction.id,
      amount: transaction.amount,
      createdAt: transaction.createdAt,
      createdBy: transaction.createdBy,
      createdDate: format(transaction.createdAt, "EE"),
      tenantId: transaction.tenantId,
      transactionType: transaction.transactionType,
      status: transaction.status,
      savingId: transaction.savingId,
    }))
  }

  async findOne(id: string) {
    return await this.prisma.transactions.findFirst({
      where: { id }
    })
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
