import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { existsSync } from 'fs';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {

  constructor(private readonly imageService: ImageService) {}

  @Get(':filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    await this.imageService.getImage(filename);
    const imagePath = join(__dirname, '..', '..', 'src', 'image', 'img', filename);

    if (!existsSync(imagePath)) {
      throw new NotFoundException('File not found');
    }

    const muhaha = res.sendFile(imagePath);

    return muhaha
  }
}
