import { Injectable } from '@nestjs/common';
import { CreateLoanOpeningApplicationDto } from './dto/create-loan-opening-application.dto';
import { UpdateLoanOpeningApplicationDto } from './dto/update-loan-opening-application.dto';

@Injectable()
export class LoanOpeningApplicationService {
  create(createLoanOpeningApplicationDto: CreateLoanOpeningApplicationDto) {
    return 'This action adds a new loanOpeningApplication';
  }

  findAll() {
    return `This action returns all loanOpeningApplication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loanOpeningApplication`;
  }

  update(id: number, updateLoanOpeningApplicationDto: UpdateLoanOpeningApplicationDto) {
    return `This action updates a #${id} loanOpeningApplication`;
  }

  remove(id: number) {
    return `This action removes a #${id} loanOpeningApplication`;
  }
}
