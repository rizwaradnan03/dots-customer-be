import { loan_opening_application as loansModel } from "@prisma/client";

export class LoanOpeningEntity implements loansModel {
    id: string;
    amount: number;
    reason: string;
    tenor: number;
    loanId: string;
}
