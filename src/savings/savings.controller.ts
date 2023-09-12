import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';

@Controller('savings')
export class SavingsController {
  constructor(private readonly savingsService: SavingsService) {}

  @Get()
  async findAll() {
    return await this.savingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') customerId: string) {
    return this.savingsService.findOne(customerId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavingDto: UpdateSavingDto) {
    return this.savingsService.update(id, updateSavingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savingsService.remove(+id);
  }
}
