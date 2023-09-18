import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { LoanOpeningApplicationService } from 'src/loan-opening-application/loan-opening-application.service';

@Module({
  controllers: [LoansController],
  providers: [LoansService, TransactionsService, LoanOpeningApplicationService, PrismaService],
})
export class LoansModule {}
