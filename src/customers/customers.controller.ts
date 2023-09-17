import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto, @Request() req) {
    return this.customersService.create(createCustomerDto), req.user;
  }
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
  //   return this.customersService.update(+id, updateCustomerDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
