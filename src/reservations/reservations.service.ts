import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createReservationDto: CreateReservationDto,id: string) {
    const findUser = this.prisma.customers.findUnique({
      where: {id}
    })

    await this.prisma.notifications.create({
      data: {
        customersId: id,
        status: 0,
        message: "Customer a.n " + (await findUser).fullName + "Berhasil Melakukan Reservasi!"
      }
    })
    return await this.prisma.reservations.create({
      data: createReservationDto
    });
  }

  async findAll() {
    return await this.prisma.reservations.findMany({
      include: {
        tenants: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.reservations.findUnique({
      where: { id },
      include: {
        tenants: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    return await this.prisma.reservations.update({
      where: { id },
      data: updateReservationDto
    });
  }

  async remove(id: string) {
    return await this.prisma.reservations.update({
      where: { id },
      data: {
        isActive: 0
      }
    });
  }
}
