import { Controller, Get, Post, Body, Patch, Param, Delete, Res, NotFoundException } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Response } from 'express';
import { join } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';
import { existsSync } from 'fs';

@Controller('image')
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly prisma: PrismaService
    ) {}

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    // Gunakan jalur absolut ke direktori 'src' di dalam proyek Anda. 
   const imagePath = join(__dirname, '..', '..', 'src', 'image', 'img', filename);

    // Pastikan file ada sebelum mengirimkannya.
    if (!existsSync(imagePath)) {
      throw new NotFoundException('File not found');
    }

    res.sendFile(imagePath);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
