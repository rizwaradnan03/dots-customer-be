import { Injectable } from '@nestjs/common';
import { CreateLoanOpeningApplicationDto } from './dto/create-loan-opening-application.dto';
import { UpdateLoanOpeningApplicationDto } from './dto/update-loan-opening-application.dto';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LoanOpeningApplicationService {
  constructor (private readonly prisma: PrismaService){}

  async create(createLoanOpeningApplicationDto: CreateLoanOpeningApplicationDto) {
    return await this.prisma.loan_opening_application.create({
        data: createLoanOpeningApplicationDto
    })
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
