import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createReservationDto: CreateReservationDto, id: string) {

    const user = await this.prisma.users.findUnique({
      where: { id }
    })

    return await this.prisma.reservations.create({
      data: {
        ...createReservationDto,
        createdById: user.id
      }
    });
  }

  async findAll() {
    return await this.prisma.reservations.findMany();
  }

  async findAllIsActive() {
    return await this.prisma.reservations.findMany({
      where: {
        isActive: 0
      }
    });
  }

  async findAllNotActive() {
    return await this.prisma.reservations.findMany({
      where: {
        isActive: 1
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.reservations.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    const user = await this.prisma.users.findUnique({
      where: { id }
    })

    return await this.prisma.reservations.update({
      where: { id },
      data: updateReservationDto
    });
  }

  async remove(id: string) {
    return await this.prisma.reservations.update({
      where: { id },
      data: {
        isActive: 1
      }
    });
  }
}
