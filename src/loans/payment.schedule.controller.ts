import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { paymentScheduleService } from './payment.schedule.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@ApiTags('payment-schedule')
@Controller('payment-schedule')
export class paymentScheduleController {
    constructor(private readonly paymentScheduleService: paymentScheduleService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAllPaymentSchedule() {
        return await this.paymentScheduleService.findAllPaymentSchedule();
    }

    @UseGuards(JwtAuthGuard)
    @Get('find/:id')
    async findAllPaymentScheduleByLoanId(@Param('id') loanId: string) {
        return await this.paymentScheduleService.findAllPaymentScheduleByLoanId(loanId);
    }

}