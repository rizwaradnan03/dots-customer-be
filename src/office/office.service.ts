import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OfficeService {
  constructor(private prisma: PrismaService) { }

  async create(createOfficeDto: CreateOfficeDto) {
    return await this.prisma.office.create({
      data: createOfficeDto
    });
  }

  async findAll() {
    return await this.prisma.office.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.office.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateOfficeDto: UpdateOfficeDto) {
    return await this.prisma.office.update({
      where: {id},
      data: updateOfficeDto
    });
  }

  async remove(id: string) {
    return await this.prisma.office.delete({
      where: {id}
    });
  }
}
