import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class paymentScheduleService {
    constructor(private readonly prisma: PrismaService) { }

    async findAllPaymentSchedule() {
        return await this.prisma.loan_installment.findMany()
    }

    async findAllPaymentScheduleByLoanId(loanId: string) {
        return await this.prisma.loan_installment.findMany({
            where: { loanId: loanId }
        })
    }

}
