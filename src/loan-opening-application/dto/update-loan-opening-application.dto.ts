import { PartialType } from '@nestjs/swagger';
import { CreateLoanOpeningApplicationDto } from './create-loan-opening-application.dto';

export class UpdateLoanOpeningApplicationDto extends PartialType(CreateLoanOpeningApplicationDto) {}
