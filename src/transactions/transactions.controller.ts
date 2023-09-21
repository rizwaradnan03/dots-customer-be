import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { retry } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.transactionsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.transactionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('savings')
  async findOneSaving(@Param('id') savingId: string) {
    return await this.transactionsService.findOneSaving(savingId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('loans')
  async findTopUp(){
    return await this.transactionsService.findTopUp();
  }

  @UseGuards(JwtAuthGuard)
  @Get('deposits')
  async findDeposit(){
    return await this.transactionsService.findDeposit();
  }
   
  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return await this.transactionsService.update(+id, updateTransactionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.transactionsService.remove(+id);
  }
}
