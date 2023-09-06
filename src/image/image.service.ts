import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import { NotFound } from 'src/helper/base.response';

@Injectable()
export class ImageService {
  constructor(private readonly prisma: PrismaService){}

  async create(createImageDto: CreateImageDto) {
    return await this.prisma.image.create({
      data: createImageDto
    });
  }

  findAll() {
    return `This action returns all image`;
  }

  async findOne(id: string) {

    const findImg = await this.prisma.image.findUnique({
      where: {id}
    })

    if (!findImg) {
      return NotFound("Image Not Found")
    }

    const imagePath = 'path_to_your_image.jpg'; 
    const image = fs.readFileSync(imagePath);
    const imageBase64 = Buffer.from(image).toString('base64');

    return imageBase64
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
