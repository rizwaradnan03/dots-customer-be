import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { ApiTags } from '@nestjs/swagger';
import { TransactionsService } from 'src/transactions/transactions.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('loans')
@Controller('loans')
export class LoansController {
  constructor(
    private readonly loansService: LoansService,
    private readonly transactionService: TransactionsService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() createLoanDto: CreateLoanDto) {
    const customerId = req.user.customerId

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.loansService.create(createLoanDto, customerId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('topup/:id')
  async topup(@Param('id') loanId: string, @Body() data: { amount: number, tenor: number, reason: string }) {
    const topupLoan = await this.loansService.topupLoan(loanId, data);

    const transaction = await this.transactionService.recordTopupLoan(
      loanId,
      data.amount
    );

    return { loan: topupLoan, transaction };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.loansService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.loansService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return await this.loansService.update(+id, updateLoanDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.loansService.remove(+id);
  }

  ///loan res
  @UseGuards(JwtAuthGuard)
<<<<<<< HEAD
  @Post('res')
=======
  @Patch('res/:id')
>>>>>>> 0f75463d7003b98a3184e4a017278fe64767c785
  async createLoanres(@Req() req, @Param('id') loanId: string, @Body() data: { type: string, description: string }) {
    const customerId = req.user.customerId

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.loansService.updateLoanRes(loanId, customerId, data)
  }
}
