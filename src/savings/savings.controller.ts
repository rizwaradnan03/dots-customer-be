import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { ApiTags } from '@nestjs/swagger';
import { TransactionsService } from 'src/transactions/transactions.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { } from "module";
import { error } from 'console';
import { CreateSavingDto } from './dto/create-saving.dto';

@ApiTags('savings')
@Controller('savings')
export class SavingsController {
  constructor(
    private readonly savingService: SavingsService,
    private readonly transactionService: TransactionsService
  ) { }

 // Controller
@UseGuards(JwtAuthGuard)
@Post()
async create(@Req() req, @Body() createSavingDto: CreateSavingDto) {
  const customerId = req.user.customerId;

  if (!customerId) {
    throw new Error('customerId tidak valid atau kosong');
  }

  // const numericTenantId = parseInt(tenantId, 10);
  // if (isNaN(numericTenantId)) {
  //   throw new Error('tenantId tidak valid');
  // }

  return await this.savingService.create(createSavingDto, customerId);
}

  @UseGuards(JwtAuthGuard)
  @Post('deposit/:id')
  async deposit(@Param('id') savingId: string, @Body() data: { amount: number }) {
    const depositSaving = await this.savingService.depositSaving(savingId, data);

    const transaction = await this.transactionService.recordDeposit(
      savingId,
      data.amount
    );

    return { saving: depositSaving, transaction };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req) {
    const customerId = req.user.customerId

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }
    return await this.savingService.findAll(customerId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findAllByTenant(@Req() req, @Param('id') tenantId: string) {
    const customerId = req.user.customerId;
  
    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }
  
    const numericTenantId = parseInt(tenantId, 10);
  
    if (isNaN(numericTenantId)) {
      throw new Error('tenantId tidak valid');
    }
  
    return await this.savingService.findAllByTenant(customerId, numericTenantId);
  }
  

  @UseGuards(JwtAuthGuard)
  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.savingService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  // @Patch('update/:id')
  // async update(@Param('id') id: string, @Body() updateSavingDto: UpdateSavingDto) {
  //   return await this.savingService.update(id, updateSavingDto);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Delete('delete/:id')
  // async remove(@Param('id') id: string) {
  //   return await this.savingService.remove(id);
  // }
}
