import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private readonly prisma: PrismaService) { }

  
  async create(createLoanDto: CreateLoanDto) {
    return await this.prisma.loans.create({
      data: createLoanDto
    })
  }

  async topupLoan(
    loanId: string,
    amount: number) {
      
    const loan = await this.prisma.loans.findFirst({
      where: {id: loanId}
    })


    await this.prisma.loans.update({
    where: {id: loanId},
    data: {
      loan : loan.loan + amount
    }
   })


  }

  async findAll() {
    return await this.prisma.loans.findMany({
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.loans.findFirst({
      where: { id },
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      }
    })
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
