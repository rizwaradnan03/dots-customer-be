import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SavingsService } from './savings.service';
// import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { ApiTags } from '@nestjs/swagger';
import { TransactionsService } from 'src/transactions/transactions.service';

@ApiTags('savings')
@Controller('savings')
export class SavingsController {
  constructor(
    private readonly savingService: SavingsService,
    private readonly transactionService: TransactionsService
  ) { }

  @Post()
  async create(
    data: {
      accountNumber: string,
      customerId: string,
      tenantId: number
    }
  ) {
    return await this.savingService.create(data)
  }

  @Post('deposit/:id')
  async deposit(
    @Param('id') savingId: string,
    @Body('amount') amount: number,
  ) {
    const updatedSaving = await this.savingService.depositSaving(savingId, amount);

    const transaction = await this.transactionService.recordDeposit(
      savingId,
      amount
    );

    return { saving: updatedSaving, transaction };
  }

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
