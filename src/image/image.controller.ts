import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { existsSync } from 'fs';
import { ImageService } from './image.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('images')
@Controller('images')
export class ImageController {

  constructor(private readonly imageService: ImageService) {}
  @Get()
  async getUrlImage() {
    return await this.imageService.getUrlImage()
  }
}
