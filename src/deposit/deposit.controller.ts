import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';

@Controller('deposit')
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @Post()
  async create(@Body() createDepositDto: CreateDepositDto) {
    return await this.depositService.create(createDepositDto);
  }

  @Get()
  async findAll() {
    return await this.depositService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.depositService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDepositDto: UpdateDepositDto) {
    return await this.depositService.update(id, updateDepositDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.depositService.remove(id);
  }
}
