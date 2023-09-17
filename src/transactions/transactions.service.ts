import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createTransactionDto: CreateTransactionDto, id: string) {
    const user = await this.prisma.users.findFirst({
      where: { id }
    })

    const trans = await this.prisma.transactions.create({
      data: createTransactionDto

    })

    return { user, trans }

  }

  async recordDeposit(
    savingId: string,
    amount: number,
  ) {
    const findSaving = await this.prisma.savings.findFirst({
      where: { id: savingId }
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: findSaving.id },
      select: { userId: true }
    })

    const transaction = await this.prisma.transactions.create({
      data: {
        savingId,
        amount,
        transactionType: 1,
        status: 1,
        createdBy: findUser.userId
      }
    })
    return transaction
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
