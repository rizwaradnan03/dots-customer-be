import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';

@Controller('province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Post()
  async create(@Body() createProvinceDto: CreateProvinceDto) {
    return this.provinceService.create(createProvinceDto);
  }

  @Get()
  async findAll() {
    return this.provinceService.findAll();
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return this.provinceService.findOne(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateProvinceDto: UpdateProvinceDto) {
    return this.provinceService.update(id, updateProvinceDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.provinceService.remove(id);
  }
}
