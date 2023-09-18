import { Injectable } from '@nestjs/common';
import { CreateLoanResApplicationDto } from './dto/create-loan-res-application.dto';
import { UpdateLoanResApplicationDto } from './dto/update-loan-res-application.dto';

@Injectable()
export class LoanResApplicationService {
  create(createLoanResApplicationDto: CreateLoanResApplicationDto) {
    return 'This action adds a new loanResApplication';
  }

  findAll() {
    return `This action returns all loanResApplication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loanResApplication`;
  }

  update(id: number, updateLoanResApplicationDto: UpdateLoanResApplicationDto) {
    return `This action updates a #${id} loanResApplication`;
  }

  remove(id: number) {
    return `This action removes a #${id} loanResApplication`;
  }
}
