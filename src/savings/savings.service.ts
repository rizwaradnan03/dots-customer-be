import { Injectable } from '@nestjs/common';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SavingsService {
  constructor(private prisma: PrismaService) { }

  async create(createSavingDto: CreateSavingDto) {
    return await this.prisma.savings.create({
      data: createSavingDto
    });
  }

  async findAll() {
    return await this.prisma.savings.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.savings.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateSavingDto: UpdateSavingDto) {
    return await this.prisma.savings.update({
      where: {id},
      data: updateSavingDto
    });
  }

  async remove(id: string) {
    return await this.prisma.savings.delete({
      where: {id}
    });
  }

  async findView() {
    return await this.prisma.savings.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        },
        office:{
          select:{
            id: true,
            name: true
          }
        }
      }
    });
  }

}
