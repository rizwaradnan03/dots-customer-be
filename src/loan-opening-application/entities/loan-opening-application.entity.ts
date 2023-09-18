import { loan_opening_application as loansModel } from "@prisma/client";

export class LoanOpeningApplication implements loansModel {
    id: string;
    amount: number;
    reason: string;
    tenor: number;
    customerId: string;
}
