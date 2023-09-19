import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiTags } from '@nestjs/swagger';
import { NotificationService } from 'src/notification/notification.service';
import { CreateNotificationDto } from 'src/notification/dto/create-notification.dto';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService, private readonly notificationsService: NotificationService) { }

  @Post(':id')
  async create(@Param('id') customerId: string, @Body() createReservationDto: CreateReservationDto) {
    return await this.reservationsService.create(createReservationDto, customerId);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @Patch('delete/:id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(id);
  }
}
