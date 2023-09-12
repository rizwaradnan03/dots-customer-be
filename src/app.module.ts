import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ImageModule } from './image/image.module';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';
import { CustomersModule } from './customers/customers.module';
import { SavingsModule } from './savings/savings.module';


@Module({
  imports: [PrismaModule, AuthModule, ImageModule, UsersModule, ReservationsModule, CustomersModule, SavingsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
