import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanOpeningApplicationService } from './loan-opening-application.service';
import { loanOpeningDto } from './dto/update-loan-opening-application.dto';

@Controller('opening')
export class LoanOpeningApplicationController {
  constructor(private readonly loanOpeningApplicationService: LoanOpeningApplicationService) {}

  @Get()
  findAll() {
    return this.loanOpeningApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanOpeningApplicationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanOpeningDto: loanOpeningDto) {
    return this.loanOpeningApplicationService.update(id, updateLoanOpeningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanOpeningApplicationService.remove(id);
  }
}
