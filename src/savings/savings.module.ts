import { Module } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { SavingsController } from './savings.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionsService } from 'src/transactions/transactions.service';

@Module({
  controllers: [SavingsController],
  providers: [SavingsService, TransactionsService, PrismaService],
})
export class SavingsModule {}
