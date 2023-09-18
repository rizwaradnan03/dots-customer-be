import { Module } from '@nestjs/common';
import { LoanOpeningApplicationService } from './loan-opening-application.service';
import { LoanOpeningApplicationController } from './loan-opening-application.controller';
<<<<<<< HEAD
import { PrismaClient } from '@prisma/client';
=======
>>>>>>> f66e72dbb72c4fe778adbe06f4572f8a505f87d1
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoanOpeningApplicationController],
  providers: [LoanOpeningApplicationService, PrismaService],
})
export class LoanOpeningApplicationModule {}
