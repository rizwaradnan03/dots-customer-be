import { Injectable } from '@nestjs/common';
import { CreateWardDto } from './dto/create-ward.dto';
import { UpdateWardDto } from './dto/update-ward.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WardService {
  constructor(private prisma: PrismaService) { }

  async create(createWardDto: CreateWardDto) {
    return await this.prisma.ward.create({
      data: createWardDto
    });
  }

  async findAll() {
    return await this.prisma.ward.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.ward.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateWardDto: UpdateWardDto) {
    return await this.prisma.ward.update({
      where: { id },
      data: updateWardDto
    });
  }

  async remove(id: string) {
    return await this.prisma.ward.delete({
      where: {id}
    });
  }
}
