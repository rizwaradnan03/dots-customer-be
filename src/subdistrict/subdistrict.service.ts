import { Injectable } from '@nestjs/common';
import { UpdateSubdistrictDto } from './dto/update-subdistrict.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubdistrictDto } from './dto/create-subdistrict.dto';

@Injectable()
export class SubdistrictService {
  constructor(private prisma: PrismaService) { }

  async create(createSubdistrictDto: CreateSubdistrictDto) {
    return await this.prisma.subdistrict.create({
      data: createSubdistrictDto
    });
  }

  async findAll() {
    return await this.prisma.subdistrict.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.subdistrict.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateSubdistrictDto: UpdateSubdistrictDto) {
    return await this.prisma.subdistrict.update({
      where: { id },
      data: updateSubdistrictDto
    });
  }

  async remove(id: string) {
    return await this.prisma.subdistrict.delete({
      where: { id }
    });
  }
}
