import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Accepted } from 'src/helper/base.response';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) { }

  async create(createCityDto: CreateCityDto) {
    await this.prisma.city.create({
      data: createCityDto
    }), Accepted();

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

  async findView(){
    return await this.prisma.city.findMany({
      include:{
        province:{
          select:{
            id : true,
            name : true
          }
        }
      }
    })
  }

}
