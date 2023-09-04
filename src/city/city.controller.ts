import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    return await this.cityService.create(createCityDto);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  async findAll(@Request() Req ) {
    return await this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cityService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return await this.cityService.update(id, updateCityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cityService.remove(id);
  }

  @Get('view/')
    async findView(){
      return await this.cityService.findView()
    }

}
