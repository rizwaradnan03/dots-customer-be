import { Module } from '@nestjs/common';
import { LoanOpeningApplicationService } from './loan-opening-application.service';
import { LoanOpeningApplicationController } from './loan-opening-application.controller';

@Module({
  controllers: [LoanOpeningApplicationController],
  providers: [LoanOpeningApplicationService],
})
export class LoanOpeningApplicationModule {}
