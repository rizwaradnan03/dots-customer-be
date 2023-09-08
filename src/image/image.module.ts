import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [PrismaService, ImageService],
})
export class ImageModule {}
