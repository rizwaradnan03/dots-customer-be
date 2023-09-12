import { Injectable } from '@nestjs/common';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SavingsService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return await this.prisma.savings.findMany({
      select: {
        id: true,
        currentBalance: true,
        customerId: true
      }
    });
  }

  async findOne(customerId: string) {
    return await this.prisma.savings.findFirst({
      where: { customerId }
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
