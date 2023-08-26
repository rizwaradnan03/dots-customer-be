import { Module } from '@nestjs/common';
import { WardService } from './ward.service';
import { WardController } from './ward.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [WardController],
  providers: [WardService, PrismaService],
})
export class WardModule {}
