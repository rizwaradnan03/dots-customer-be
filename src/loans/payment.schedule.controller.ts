import { Controller, Get } from '@nestjs/common';
import { paymentScheduleService } from './payment.schedule.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('payment-schedule')
@Controller('payment-schedule')
export class paymentScheduleController {
    constructor(private readonly paymentScheduleService: paymentScheduleService) { }

    @Get('')
    async findAllPaymentSchedule() {
        return await this.paymentScheduleService.findAllPaymentSchedule();
    }

    @Get(':id')
    async findAllPaymentScheduleByLoanId(loanId: string) {
        return await this.paymentScheduleService.findAllPaymentScheduleByLoanId(loanId);
    }

}