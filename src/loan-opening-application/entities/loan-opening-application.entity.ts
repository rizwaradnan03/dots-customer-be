import { loan_opening_application as loanOpeningModel } from "@prisma/client";

export class LoanOpeningEntity implements loanOpeningModel {
    id: string;
    amount: number;
    customerId: string;
    reason: string;
    tenor: number;
}
