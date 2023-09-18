import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanOpeningApplicationService } from './loan-opening-application.service';
import { CreateLoanOpeningApplicationDto } from './dto/create-loan-opening-application.dto';
import { UpdateLoanOpeningApplicationDto } from './dto/update-loan-opening-application.dto';

@Controller('loan-opening-application')
export class LoanOpeningApplicationController {
  constructor(private readonly loanOpeningApplicationService: LoanOpeningApplicationService) {}

  @Post()
  create(@Body() createLoanOpeningApplicationDto: CreateLoanOpeningApplicationDto) {
    return this.loanOpeningApplicationService.create(createLoanOpeningApplicationDto);
  }

  @Get()
  findAll() {
    return this.loanOpeningApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanOpeningApplicationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanOpeningApplicationDto: UpdateLoanOpeningApplicationDto) {
    return this.loanOpeningApplicationService.update(+id, updateLoanOpeningApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanOpeningApplicationService.remove(+id);
  }
}
