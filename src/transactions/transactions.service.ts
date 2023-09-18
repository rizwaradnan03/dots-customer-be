import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return transaction
  }

  async findAll() {
    return await this.prisma.transactions.findMany()
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
