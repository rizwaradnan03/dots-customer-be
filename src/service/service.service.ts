import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return await this.prisma.service.create({
      data: createServiceDto
    });
  }

  async findAll() {
    return await this.prisma.service.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.service.findUnique({
      where: {id}
    });
  }

  async update(id: string, createServiceDto: CreateServiceDto) {
    return await this.prisma.service.update({
      where: {id},
      data: createServiceDto
    });
  }

  async remove(id: string) {
    return await this.prisma.service.delete({
      where: {id}
    });
  }
}
