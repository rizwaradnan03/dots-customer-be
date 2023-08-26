import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { ProvinceModule } from './province/province.module';
import { CityModule } from './city/city.module';
import { SubdistrictModule } from './subdistrict/subdistrict.module';
import { WardModule } from './ward/ward.module';

@Module({
  imports: [PrismaModule, UserModule, ProvinceModule, CityModule, SubdistrictModule, WardModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
