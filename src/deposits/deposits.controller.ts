import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { DepositsService } from './deposits.service';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { id } from 'date-fns/locale';

@ApiTags('deposits')
@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() createDepositDto: CreateDepositDto) {
    const customerId = req.user.customerId

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.depositsService.create(createDepositDto, customerId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req) {
    const customerId = req.user.customerId

    if (!customerId) {
      throw new Error('customerId tidak valid atau kosong');
    }

    return await this.depositsService.findAll(customerId);
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
  
    return await this.depositsService.findAllByTenant(customerId, numericTenantId);
  }
  

  @UseGuards(JwtAuthGuard)
  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.depositsService.findOne(id);
  }
  
  // @UseGuards(JwtAuthGuard)
  // @Delete('delete/:id')
  // async remove(@Param('id') id: string) {
  //   return await this.depositsService.remove(id);
  // }
}
