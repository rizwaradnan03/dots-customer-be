import { Module } from '@nestjs/common';
import { LoanOpeningApplicationService } from './loan-opening-application.service';
import { LoanOpeningApplicationController } from './loan-opening-application.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoanOpeningApplicationController],
  providers: [LoanOpeningApplicationService, PrismaService],
})
export class LoanOpeningApplicationModule {}
