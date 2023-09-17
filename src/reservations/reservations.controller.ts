import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) { }

  @Post(':id')
  create(@Body() createReservationDto: CreateReservationDto,@Param('id') id: string) {
    return this.reservationsService.create(createReservationDto, id);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get('active')
  findAllIsActive() {
    return this.reservationsService.findAllIsActive();
  }

  @Get('not-active')
  findAllNotActive() {
    return this.reservationsService.findAllNotActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @Patch(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(id);
  }
}
