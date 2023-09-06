import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import * as path from 'path';
import { ImageEntity } from './entities/image.entity';
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

  async getImageByName(filename: string) {
    return await this.prisma.image.findFirst({
      where: { filename },
    });
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
