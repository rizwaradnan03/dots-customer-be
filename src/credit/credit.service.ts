import { Injectable } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreditService {
  constructor(private prisma: PrismaService) { }

  async create(createCreditDto: CreateCreditDto) {
    return await this.prisma.credit.create({
      data: createCreditDto
    });
  }

  async findAll() {
    return await this.prisma.credit.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.credit.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateCreditDto: UpdateCreditDto) {
    return await this.prisma.credit.update({
      where: {id},
      data: updateCreditDto
    });
  }

  async remove(id: string) {
    return await this.prisma.credit.delete({
      where: {id}
    });
  }
}
