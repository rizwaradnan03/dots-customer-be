import { loan_res_application as loanResModel} from "@prisma/client";

export class LoanResEntity implements loanResModel {
    id: string;
    customerId: string;
    description: string;
    loanId: string;
    type: string;
}
