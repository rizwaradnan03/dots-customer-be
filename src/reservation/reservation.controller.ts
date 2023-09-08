import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Accepted } from 'src/helper/base.response';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    return await this.reservationService.create(createReservationDto) 
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.reservationService.findAll();
  }

  @Get('/qr/:id')
  async getQr(@Param('id') id: string) {
    return await this.reservationService.getQrCode(id)
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.reservationService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return await this.reservationService.update(id, updateReservationDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.reservationService.remove(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('/view')
  async findView(){
    return await this.reservationService.findView()
  }
}
