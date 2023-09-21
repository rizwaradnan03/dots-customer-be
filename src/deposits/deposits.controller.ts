import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { DepositsService } from './deposits.service';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('deposits')
@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createDepositDto: CreateDepositDto) {
    const customerId = req.user.customerId

    return this.depositsService.create(createDepositDto, customerId);
  }

  @Get()
  findAll() {
    return this.depositsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.depositsService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDepositDto: UpdateDepositDto) {
  //   return this.depositsService.update(id, updateDepositDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depositsService.remove(id);
  }
}
