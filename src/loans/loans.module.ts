import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionsService } from 'src/transactions/transactions.service';

@Module({
  controllers: [LoansController],
  providers: [LoansService, TransactionsService, PrismaService],
})
export class LoansModule {}
