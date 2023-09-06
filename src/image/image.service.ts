import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(private readonly prisma: PrismaService){}

  async create(createImageDto: CreateImageDto) {
    return await this.prisma.image.create({
      data: createImageDto
    });
  }

  async findAll() {
    return await this.prisma.image.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.image.findFirst({
      where: {id}
    });
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
