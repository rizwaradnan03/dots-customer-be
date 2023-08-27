import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';

@Controller('savings')
export class SavingsController {
  constructor(private readonly savingsService: SavingsService) {}

  @Post()
  async create(@Body() createSavingDto: CreateSavingDto) {
    return await this.savingsService.create(createSavingDto);
  }

  @Get()
  async findAll() {
    return await this.savingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.savingsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSavingDto: UpdateSavingDto) {
    return await this.savingsService.update(id, updateSavingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.savingsService.remove(id);
  }

  @Get('view/')
  async findView(){
    return await this.savingsService.findView()
  }
}
