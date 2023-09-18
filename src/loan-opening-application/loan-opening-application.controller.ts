import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanOpeningApplicationService } from './loan-opening-application.service';

@Controller('opening')
export class LoanOpeningApplicationController {
  constructor(private readonly loanOpeningApplicationService: LoanOpeningApplicationService) {}

  @Get()
  findAll() {
    return this.loanOpeningApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanOpeningApplicationService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoanOpeningApplicationDto: UpdateLoanOpeningApplicationDto) {
  //   return this.loanOpeningApplicationService.update(+id, updateLoanOpeningApplicationDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanOpeningApplicationService.remove(+id);
  }
}
