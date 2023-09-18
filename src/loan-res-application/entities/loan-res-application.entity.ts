import { loan_res_application as loanres} from "@prisma/client";

export class LoanResApplication implements loanres {
    customerId: string;
    description: string;
    id: string;
    loanId: string;
    type: string;
}
