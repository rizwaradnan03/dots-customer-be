import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProvinceService {
  constructor(private prisma: PrismaService) { }

  async create(createProvinceDto: CreateProvinceDto) {
    return await this.prisma.province.create({
      data: createProvinceDto
    });
  }

  async findAll() {
    return await this.prisma.province.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.province.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateProvinceDto: UpdateProvinceDto) {
    return await this.prisma.province.update({
      where: {id},
      data: updateProvinceDto
    });
  }

  async remove(id: string) {
    return await this.prisma.province.delete({
      where: {id}
    });
  }
}
