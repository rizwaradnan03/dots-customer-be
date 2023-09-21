import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards , Req} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiTags } from '@nestjs/swagger';
import { NotificationService } from 'src/notification/notification.service';
import { CreateNotificationDto } from 'src/notification/dto/create-notification.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService, private readonly notificationsService: NotificationService) { }

  @UseGuards(JwtAuthGuard)
  @Post('')
  async create(@Req() req, @Body() createReservationDto: CreateReservationDto) {
    const customerId = req.user.customerId; 

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.reservationsService.create(createReservationDto, customerId);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
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
