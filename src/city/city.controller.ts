import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    return await this.cityService.create(createCityDto);
  }

  @Get()
  async findAll() {
    return await this.cityService.findAll();
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.cityService.findOne(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return await this.cityService.update(id, updateCityDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.cityService.remove(id);
  }
}
