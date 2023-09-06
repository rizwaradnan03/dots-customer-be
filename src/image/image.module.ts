import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ImageController],
  providers: [PrismaService],
})
export class ImageModule {}
