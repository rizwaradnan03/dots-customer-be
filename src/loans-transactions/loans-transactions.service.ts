import { Injectable } from '@nestjs/common';
import { CreateLoansTransactionDto } from './dto/create-loans-transaction.dto';
import { UpdateLoansTransactionDto } from './dto/update-loans-transaction.dto';

@Injectable()
export class LoansTransactionsService {
  create(createLoansTransactionDto: CreateLoansTransactionDto) {
    return 'This action adds a new loansTransaction';
  }

  findAll() {
    return `This action returns all loansTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loansTransaction`;
  }

  update(id: number, updateLoansTransactionDto: UpdateLoansTransactionDto) {
    return `This action updates a #${id} loansTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} loansTransaction`;
  }
}
