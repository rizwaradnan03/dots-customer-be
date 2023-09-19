import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { paymentScheduleController } from './payment.schedule.controller';
import { paymentScheduleService } from './payment.schedule.service';

@Module({
  controllers: [LoansController, paymentScheduleController],
  providers: [LoansService, TransactionsService,paymentScheduleService ,PrismaService],
})
export class LoansModule {}
