import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor (private readonly prisma: PrismaService){}

 async create(createTransactionDto: CreateTransactionDto, id : string) {
    const user = await this.prisma.users.findFirst({
      where: { id }
    })

    const trans = await this.prisma.transactions.create({
      data: createTransactionDto
        
    })

    return {user, trans}

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
