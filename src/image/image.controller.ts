import { Controller, Get } from '@nestjs/common';
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
