import { Module } from '@nestjs/common';
import { SubdistrictService } from './subdistrict.service';
import { SubdistrictController } from './subdistrict.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SubdistrictController],
  providers: [SubdistrictService, PrismaService],
})
export class SubdistrictModule {}
