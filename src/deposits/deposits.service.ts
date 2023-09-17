import { Injectable } from '@nestjs/common';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepositsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createDepositDto: CreateDepositDto) {
    return await this.prisma.deposits.create({
      data: createDepositDto
    })
  }

  async findAll() {
    return await this.prisma.deposits.findMany({
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
    return await this.prisma.deposits.findFirst({
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

  async update(id: string, updateDepositDto: UpdateDepositDto) {
    return await this.prisma.deposits.update({
      where: { id },
      data: updateDepositDto
    });
  }

  async remove(id: string) {
    return await this.prisma.deposits.update({
      where: { id },
      data: { isActive: 0 }
    });
  }
}
