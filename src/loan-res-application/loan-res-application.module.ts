import { Module } from '@nestjs/common';
import { LoanResApplicationService } from './loan-res-application.service';
import { LoanResApplicationController } from './loan-res-application.controller';

@Module({
  controllers: [LoanResApplicationController],
  providers: [LoanResApplicationService],
})
export class LoanResApplicationModule {}
