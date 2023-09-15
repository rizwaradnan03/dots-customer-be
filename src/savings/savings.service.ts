import { Injectable } from '@nestjs/common';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SavingsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSavingDto: CreateSavingDto) {
    return await this.prisma.savings.create({
      data: createSavingDto
    })
  }

  async findAll() {
    return await this.prisma.savings.findMany({
      select: {
        id: true,
        accountNumber: true,
        tenantId: true,
        tenants: {
          select: {
            name: true
          }
        }
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.savings.findUnique({
      where: { id },
      include: {
        tenants: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async update(id: string, updateSavingDto: UpdateSavingDto) {
    return await this.prisma.savings.update({
      where: { id },
      data: updateSavingDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} saving`;
  }
}
