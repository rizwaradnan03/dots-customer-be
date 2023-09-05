import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { BaseResponse } from 'src/helper/base.response';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() createReservationDto: CreateReservationDto) {
    const data = {"message": "Reservasi Berhasil Dibuat"}
    const response = new BaseResponse(200, "success", "Data Berhasil Dibuat", data)
    console.log(response)
    return await this.reservationService.create(createReservationDto)
  }

  @Get()
  async findAll() {
    return await this.reservationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.reservationService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return await this.reservationService.update(id, updateReservationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.reservationService.remove(id);
  }

  @Get('/view')
  async findView(){
    return await this.reservationService.findView()
  }
}
