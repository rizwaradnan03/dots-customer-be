import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('deposit')
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createDepositDto: CreateDepositDto) {
    return await this.depositService.create(createDepositDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.depositService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.depositService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDepositDto: UpdateDepositDto) {
    return await this.depositService.update(id, updateDepositDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.depositService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('view/')
  async findView(){
    return await this.depositService.findView()
  }


}
