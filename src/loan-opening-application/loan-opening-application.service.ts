import { Injectable } from '@nestjs/common';
import { CreateLoanOpeningApplicationDto } from './dto/create-loan-opening-application.dto';
import { UpdateLoanOpeningApplicationDto } from './dto/update-loan-opening-application.dto';
<<<<<<< HEAD
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LoanOpeningApplicationService {
  constructor (private readonly prisma: PrismaService){}

  async create(createLoanOpeningApplicationDto: CreateLoanOpeningApplicationDto) {
    return await this.prisma.loan_opening_application.create({
        data: createLoanOpeningApplicationDto
=======
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoanOpeningApplicationService {
  constructor(private readonly prisma: PrismaService){}

  async create(createLoanOpeningApplicationDto: CreateLoanOpeningApplicationDto) {
    return await this.prisma.loan_opening_application.create({
      data: createLoanOpeningApplicationDto
>>>>>>> f66e72dbb72c4fe778adbe06f4572f8a505f87d1
    })
  }

  async findAll() {
    return await this.prisma.loan_opening_application.findMany()
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
