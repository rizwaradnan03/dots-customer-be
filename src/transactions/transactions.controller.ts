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
  findAll() {
    return this.transactionsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('/savings/:id')
  findOneSaving(@Param('id') savingId: string) {
    return this.transactionsService.findOneSaving(savingId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/loans')
  findTopUp(){
    return this.transactionsService.findTopUp();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/deposit')
  findDeposit(){
    return this.transactionsService.findDeposit();
  }
   

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
