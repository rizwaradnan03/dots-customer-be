import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { ApiTags } from '@nestjs/swagger';
import { TransactionsService } from 'src/transactions/transactions.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import {  } from "module";
import { error } from 'console';
import { CreateSavingDto } from './dto/create-saving.dto';

@ApiTags('savings')
@Controller('savings')
export class SavingsController {
  constructor(
    private readonly savingService: SavingsService,
    private readonly transactionService: TransactionsService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() createSavingDto:CreateSavingDto) {
    const customerId = req.user.customerId

    return await this.savingService.create(createSavingDto, customerId)
  }

  @Post('deposit/:id')
  async deposit(
    @Param('id') savingId: string,
    @Body() data: { amount: number },
  ) {
    const depositSaving = await this.savingService.depositSaving(savingId, data);

    const transaction = await this.transactionService.recordDeposit(
      savingId,
      data.amount
    );

    return { saving: depositSaving, transaction };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.savingService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavingDto: UpdateSavingDto) {
    return this.savingService.update(id, updateSavingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savingService.remove(id);
  }
}
