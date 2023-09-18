import { Module } from '@nestjs/common';
import { LoanResApplicationService } from './loan-res-application.service';
import { LoanResApplicationController } from './loan-res-application.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoansService } from 'src/loans/loans.service';

@Module({
  controllers: [LoanResApplicationController],
  providers: [LoanResApplicationService, PrismaService, LoansService],
})
export class LoanResApplicationModule {}
