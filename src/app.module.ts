import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { ReservationModule } from './reservation/reservation.module';
import { SavingsModule } from './savings/savings.module';
import { AuthModule } from './auth/auth.module';
import { ImageModule } from './image/image.module';
import { CustomerModule } from './customer/customer.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [PrismaModule, UserModule, ReservationModule, SavingsModule, AuthModule, ImageModule, CustomerModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
