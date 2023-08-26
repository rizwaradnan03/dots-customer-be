import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { ProvinceModule } from './province/province.module';

@Module({
  imports: [PrismaModule, UserModule, ProvinceModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
