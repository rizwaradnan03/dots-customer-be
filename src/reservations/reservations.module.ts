import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationService } from 'src/notification/notification.service';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService, PrismaService, NotificationService],
})
export class ReservationsModule {}
