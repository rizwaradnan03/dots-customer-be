import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OfficeService } from './office.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('office')
export class OfficeController {
  constructor(private readonly officeService: OfficeService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createOfficeDto: CreateOfficeDto) {
    return await this.officeService.create(createOfficeDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.officeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.officeService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOfficeDto: UpdateOfficeDto) {
    return await this.officeService.update(id, updateOfficeDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.officeService.remove(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('view/')
  async findView(){
    return await this.officeService.findView()
  }

}
