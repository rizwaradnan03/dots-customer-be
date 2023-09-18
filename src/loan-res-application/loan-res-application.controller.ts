import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanResApplicationService } from './loan-res-application.service';
import { CreateLoanResApplicationDto } from './dto/create-loan-res-application.dto';
import { UpdateLoanResApplicationDto } from './dto/update-loan-res-application.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoansService } from 'src/loans/loans.service';

@ApiTags('res')
@Controller('res')
export class LoanResApplicationController {
  constructor(
    private readonly loanResApplicationService: LoanResApplicationService,
    private readonly loansService : LoansService
    ) {}

  // @Post()
  // create(@Body() createLoanResApplicationDto: CreateLoanResApplicationDto) {
  //   return this.loanResApplicationService.create(createLoanResApplicationDto);
  // }

  @Post(':id')
   create(@Param('id') loanId: string, @Body()CreateLoanResApplicationDto : CreateLoanResApplicationDto){
    return this.loanResApplicationService.create(CreateLoanResApplicationDto, loanId);
  }

  // @Get()
  // findAll() {
  //   return this.loanResApplicationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.loanResApplicationService.findOne(id);
  // }


  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loanResApplicationService.remove(+id);
  // }
}
