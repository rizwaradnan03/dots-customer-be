import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { format } from 'date-fns'
import { id, tr } from 'date-fns/locale';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) { }

  async recordDeposit(savingId: string, amount: number) {
    const saving = await this.prisma.savings.findFirst({
      where: { id: savingId }
    })

    const customer = await this.prisma.customers.findFirst({
      where: { id: saving.customerId },
    })

    const tenant = await this.prisma.tenants.findFirst({
      where: { id: saving.tenantId }
    })

    const transaction = await this.prisma.transactions.create({
      data: {
        savingId,
        amount,
        transactionType: 1,
        status: 1,
        createdBy: customer.userId,
        tenantId: tenant.id
      }
    })

    switch (transaction.transactionType) {
      case 1:
        return await this.prisma.transactions.update({ where: { id: transaction.id }, data: { title: "setoran dan tabungan" } })
      case 2:
        return await this.prisma.transactions.update({ where: { id: transaction.id }, data: { title: "deposit" } })
    }

    return transaction
  }

  async recordTopupLoan(loanId: string, amount: number) {
    const loan = await this.prisma.loans.findFirst({
      where: { id: loanId }
    })

    const customer = await this.prisma.customers.findFirst({
      where: { id: loan.customerId },
    })

    const tenant = await this.prisma.tenants.findFirst({
      where: { id: loan.tenantId }
    })

    const transaction = await this.prisma.transactions.create({
      data: {
        loanId: loan.id,
        amount,
        transactionType: 3,
        status: 1,
        createdBy: customer.userId,
        tenantId: tenant.id
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
      loanId: transaction.loanId
    }))
  }

  async findTopUp() {
    const transaction = await this.prisma.transactions.findMany({
      where: { transactionType: 3 },
      select: {
        loanId: true,
        status: true,
        tenantId: true,
        principalPaid: true,
        interestPaid: true,
        penaltyPaid: true
      }
    })

    return transaction
  }

  async findDeposit() {
    const deposit = await this.prisma.transactions.findMany({
      where: { transactionType: 1 },
      select: {
        amount: true,
        title: true,
        savingId: true,
        depositId: true
      }
    })
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
