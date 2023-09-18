import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService){}

  create(createNotificationDto: CreateNotificationDto) {
    return this.prisma.notifications.create({data: createNotificationDto});
  }

  findAll() {
    return this.prisma.notifications.findMany({
      include: {
        customers: {
          select: {
            id: true,
            fullName: true
          }
        }
      }
    });
  }

  findOne(id: string) {
    return this.prisma.notifications.findUnique({
      include: {
        customers: {
          select: {
            id: true,
            fullName: true
          }
        }
      },
      where: {id}
    });;
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto) {
    return this.prisma.notifications.update({
      data: updateNotificationDto,
      where: {id}
    })
  }

updateIsOpened(id: string){
  return this.prisma.notifications.update({
    where: {id},
    data: {
      isOpened: 1
    }
  })
}

  remove(id: string) {
    return this.prisma.notifications.delete({
      where: {id}
    });
  }
}
