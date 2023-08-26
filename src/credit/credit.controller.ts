import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';

@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @Post()
  async create(@Body() createCreditDto: CreateCreditDto) {
    return this.creditService.create(createCreditDto);
  }

  @Get()
  async findAll() {
    return this.creditService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.creditService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCreditDto: UpdateCreditDto) {
    return this.creditService.update(id, updateCreditDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.creditService.remove(id);
  }
}
