import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanResApplicationService } from './loan-res-application.service';
import { CreateLoanResApplicationDto } from './dto/create-loan-res-application.dto';
import { UpdateLoanResApplicationDto } from './dto/update-loan-res-application.dto';

@Controller('res')
export class LoanResApplicationController {
  constructor(private readonly loanResApplicationService: LoanResApplicationService) {}

  @Post()
  create(@Body() createLoanResApplicationDto: CreateLoanResApplicationDto) {
    return this.loanResApplicationService.create(createLoanResApplicationDto);
  }

  @Get()
  findAll() {
    return this.loanResApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanResApplicationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanResApplicationDto: UpdateLoanResApplicationDto) {
    return this.loanResApplicationService.update(id, updateLoanResApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanResApplicationService.remove(+id);
  }
}
