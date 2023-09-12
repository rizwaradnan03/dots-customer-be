import { Injectable } from '@nestjs/common';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SavingsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createSavingDto: CreateSavingDto) {
    return 'This action adds a new saving';
  }

  async findAll() {
    return await this.prisma.savings.findMany({
      select: {
        currentBalance: true,
        availableBalance: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} saving`;
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
