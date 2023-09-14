import { PartialType } from '@nestjs/swagger';
import { CreateLoansTransactionDto } from './create-loans-transaction.dto';

export class UpdateLoansTransactionDto extends PartialType(CreateLoansTransactionDto) {}
