<<<<<<< HEAD
import { loan_opening_application as loansModel } from "@prisma/client";

export class LoanOpeningApplication implements loansModel {
    id: string;
    amount: number;
    reason: string;
    tenor: number;
    customerId: string;
=======
import { loan_opening_application as loanOpeningModel } from "@prisma/client";

export class LoanOpeningEntity implements loanOpeningModel {
    id: string;
    amount: number;
    customerId: string;
    reason: string;
    tenor: number;
>>>>>>> f66e72dbb72c4fe778adbe06f4572f8a505f87d1
}
