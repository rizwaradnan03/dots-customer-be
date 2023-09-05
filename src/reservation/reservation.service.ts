import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) { }

  async create(createReservationDto: CreateReservationDto) {
    return await this.prisma.reservation.create({
      data: createReservationDto
    })
  }

  async findAll() {
    return await this.prisma.reservation.findMany({
      include: {
        officeDestination: {
          select: {name: true}
        }
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.reservation.findUnique({
      where: { id },
      include: {
        officeDestination: {
          select: {name: true}
        }
      }
    });
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    return await this.prisma.reservation.update({
      where: {id},
      data: updateReservationDto
    });
  }

  async remove(id: string) {
    return await this.prisma.reservation.delete({
      where: {id}
    });
  }

  async findView() {
    return await this.prisma.reservation.findMany({
      include: {
        officeDestination: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
  }

}
