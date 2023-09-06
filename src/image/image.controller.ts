import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  async getImage(@Param('id') id: string, @Res() res) {
    try {
      const imageBase64 = await this.imageService.findOne(id);
      if (!imageBase64) {
        return res.status(HttpStatus.NOT_FOUND).send('Image not found');
      }

      res.setHeader('Content-Type', 'image/jpeg');
      res.send(Buffer.from(imageBase64, 'base64'));
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Internal server error');
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.imageService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
