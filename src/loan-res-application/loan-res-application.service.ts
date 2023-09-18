import { Injectable } from '@nestjs/common';
import { CreateLoanResApplicationDto } from './dto/create-loan-res-application.dto';
import { UpdateLoanResApplicationDto } from './dto/update-loan-res-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoanResApplicationService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createLoanResApplicationDto: CreateLoanResApplicationDto) {
    return await this.prisma.loan_res_application.create({
      data: createLoanResApplicationDto
    })
  }

  async findAll() {
    return await this.prisma.loan_res_application.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.loan_res_application.findUnique({
      where: { id }
    })
  }

  async update(id: string, createLoanResApplicationDto: CreateLoanResApplicationDto) {
    return await this.prisma.loan_res_application.update({
      where: { id },
      data: createLoanResApplicationDto
    })
  }

  remove(id: number) {
    return `This action removes a #${id} loanResApplication`;
  }
}
