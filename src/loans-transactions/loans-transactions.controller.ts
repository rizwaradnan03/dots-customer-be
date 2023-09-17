import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoansTransactionsService } from './loans-transactions.service';
import { CreateLoansTransactionDto } from './dto/create-loans-transaction.dto';
import { UpdateLoansTransactionDto } from './dto/update-loans-transaction.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('loans-transactions')
@Controller('loans-transactions')
export class LoansTransactionsController {
  constructor(private readonly loansTransactionsService: LoansTransactionsService) {}

  @Post()
  create(@Body() createLoansTransactionDto: CreateLoansTransactionDto) {
    return this.loansTransactionsService.create(createLoansTransactionDto);
  }

  @Get()
  findAll() {
    return this.loansTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loansTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoansTransactionDto: UpdateLoansTransactionDto) {
    return this.loansTransactionsService.update(+id, updateLoansTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loansTransactionsService.remove(+id);
  }
}
