import { Injectable } from '@nestjs/common';
import { CreateLoanResApplicationDto } from './dto/create-loan-res-application.dto';
import { UpdateLoanResApplicationDto } from './dto/update-loan-res-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoanResApplicationService {
  constructor (private readonly prisma : PrismaService){}

  async create(createLoanResApplicationDto: CreateLoanResApplicationDto) {
    return await this.prisma.loan_res_application.create({
      data: createLoanResApplicationDto
    })
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
