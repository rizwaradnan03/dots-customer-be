import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) { }

  async create(createCityDto: CreateCityDto) {
    const city = await this.prisma.city.create({
      data: createCityDto
    });

  }

  async findAll() {
    return await this.prisma.city.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.city.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateCityDto: UpdateCityDto) {
    return await this.prisma.city.update({
      where: { id },
      data: updateCityDto
    });
  }

  async remove(id: string) {
    return await this.prisma.city.delete({
      where: { id }
    });
  }
}
