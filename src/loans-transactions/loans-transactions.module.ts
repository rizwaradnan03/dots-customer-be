import { Module } from '@nestjs/common';
import { LoansTransactionsService } from './loans-transactions.service';
import { LoansTransactionsController } from './loans-transactions.controller';

@Module({
  controllers: [LoansTransactionsController],
  providers: [LoansTransactionsService],
})
export class LoansTransactionsModule {}
