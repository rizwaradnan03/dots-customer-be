import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfficeService } from './office.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';

@Controller('office')
export class OfficeController {
  constructor(private readonly officeService: OfficeService) {}

  @Post()
  async create(@Body() createOfficeDto: CreateOfficeDto) {
    return await this.officeService.create(createOfficeDto);
  }

  @Get()
  async findAll() {
    return await this.officeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.officeService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOfficeDto: UpdateOfficeDto) {
    return await this.officeService.update(id, updateOfficeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.officeService.remove(id);
  }
}
