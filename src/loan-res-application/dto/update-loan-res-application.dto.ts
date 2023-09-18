import { PartialType } from '@nestjs/swagger';
import { CreateLoanResApplicationDto } from './create-loan-res-application.dto';

export class UpdateLoanResApplicationDto extends PartialType(CreateLoanResApplicationDto) {}
