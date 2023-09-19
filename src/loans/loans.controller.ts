import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { ApiTags } from '@nestjs/swagger';
import { TransactionsService } from 'src/transactions/transactions.service';

@ApiTags('loans')
@Controller('loans')
export class LoansController {
  constructor(
    private readonly loansService: LoansService,
    private readonly transactionService: TransactionsService,
  ) { }

  @Post('topup/:id')
  async topup(@Param('id') loanId: string, @Body() data: { amount: number, tenor: number, reason: string }) {
    const topupLoan = await this.loansService.topupLoan(loanId, data);

    const transaction = await this.transactionService.recordTopupLoan(
      loanId,
      data.amount
    );

    return { loan: topupLoan, transaction };
  }

  @Post(':id')
  create(@Param('id') customerId: string, @Body() createLoanDto: CreateLoanDto) {
    return this.loansService.create(createLoanDto, customerId);
  }

  @Get()
  async findAll() {
    return await this.loansService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.loansService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return this.loansService.update(+id, updateLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loansService.remove(+id);
  }
}
