import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards , Req} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiTags } from '@nestjs/swagger';
import { NotificationService } from 'src/notification/notification.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService, private readonly notificationsService: NotificationService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() createReservationDto: CreateReservationDto) {
  const customerId = req.user.customerId; 

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.reservationsService.create(createReservationDto, customerId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.reservationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.reservationsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return await this.reservationsService.update(id, updateReservationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.reservationsService.remove(id);
  }
}
