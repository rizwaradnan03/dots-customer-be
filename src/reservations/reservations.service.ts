import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createReservationDto: CreateReservationDto, customerId: string) {

    const reservation = await this.prisma.reservations.create({
      data: createReservationDto
    });

    const customer = await this.prisma.customers.findFirst({
      where: { id: customerId }
    })

    

    const notification = await this.prisma.notifications.create({
      data: {
        customersId: customerId,
        status: 1,
        message: "Customer " + customer.fullName +" Berhasil Melakukan Reservasi , jangan lupa untuk datang pukul " + reservation.time,
        reservationId: reservation.id
      }
    })

    
    return reservation

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
