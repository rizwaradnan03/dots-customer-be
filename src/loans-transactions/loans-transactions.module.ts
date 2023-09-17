import { Module } from '@nestjs/common';
import { LoansTransactionsService } from './loans-transactions.service';
import { LoansTransactionsController } from './loans-transactions.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoansTransactionsController],
  providers: [LoansTransactionsService, PrismaService],
})
export class LoansTransactionsModule {}
