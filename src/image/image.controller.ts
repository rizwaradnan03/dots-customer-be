import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { existsSync } from 'fs';

@Controller('image')
export class ImageController {

  @Get(':filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    const imagePath = join(__dirname, '..', '..', 'src', 'image', 'img', filename);

    if (!existsSync(imagePath)) {
      throw new NotFoundException('File not found');
    }

    res.sendFile(imagePath);
  }
}
