import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SavingsService } from './savings.service';
// import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { ApiTags } from '@nestjs/swagger';
import { TransactionsService } from 'src/transactions/transactions.service';
import { CreateSavingDto } from './dto/create-saving.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('savings')
@Controller('savings')
export class SavingsController {
  constructor(
    private readonly savingService: SavingsService,
    private readonly transactionService: TransactionsService
  ) { }

  @Post(':id')
  async create(@Param('id') customerId: string, @Body() data: { accountNumber: string, tenantId: number, }) {
    return await this.savingService.create(data, customerId)
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

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.savingService.findAll();
  }

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
