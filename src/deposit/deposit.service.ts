import { Injectable } from '@nestjs/common';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepositService {
  constructor(private prisma: PrismaService) { }

  async create(createDepositDto: CreateDepositDto) {
    return await this.prisma.deposit.create({
      data: createDepositDto
    });
  }

  async findAll() {
    return await this.prisma.deposit.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.deposit.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateDepositDto: UpdateDepositDto) {
    return await this.prisma.deposit.update({
      where: {id},
      data: updateDepositDto
    });
  }

  async remove(id: string) {
    return await this.prisma.deposit.delete({
      where: {id}
    });
  }

  async findView() {
    return await this.prisma.deposit.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        },
        office: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
  }
  

} 
