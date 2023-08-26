import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WardService } from './ward.service';
import { CreateWardDto } from './dto/create-ward.dto';
import { UpdateWardDto } from './dto/update-ward.dto';

@Controller('ward')
export class WardController {
  constructor(private readonly wardService: WardService) {}

  @Post()
  create(@Body() createWardDto: CreateWardDto) {
    return this.wardService.create(createWardDto);
  }

  @Get()
  findAll() {
    return this.wardService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.wardService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateWardDto: UpdateWardDto) {
    return this.wardService.update(id, updateWardDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.wardService.remove(id);
  }
}
