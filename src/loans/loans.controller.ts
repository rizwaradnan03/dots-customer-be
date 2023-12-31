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
  async findAll(@Req() req) {
    const customerId = req.user.customerId

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.loansService.findAll(customerId);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // async findAllByTenant(@Req() req, @Param('id') tenantId: string) {
  //   const customerId = req.user.customerId;
  
  //   if (!customerId) {
  //     throw new Error('customerId tidak valid atau kosong');
  //   }
  
  //   const numericTenantId = parseInt(tenantId, 10);
  
  //   if (isNaN(numericTenantId)) {
  //     throw new Error('tenantId tidak valid');
  //   }
  
  //   return await this.loansService.findAllByTenant(customerId, numericTenantId);
  // }
  

  @UseGuards(JwtAuthGuard)
  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.loansService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  // @Patch('update/:id')
  // async update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
  //   return await this.loansService.update(+id, updateLoanDto);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Delete('delete/:id')
  // async remove(@Param('id') id: string) {
  //   return await this.loansService.remove(+id);
  // }

  ///loan res
  @UseGuards(JwtAuthGuard)
  @Patch('res/:id')
  @Post('res')
  async createLoanres(@Req() req, @Param('id') loanId: string, @Body() data: { type: string, description: string }) {
    const customerId = req.user.customerId
    console.log(customerId)
    console.log(loanId)
    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.loansService.updateLoanRes(customerId, loanId, data)
  }
}
