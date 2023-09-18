<<<<<<< HEAD
import { loan_res_application as loanres} from "@prisma/client";

export class LoanResApplication implements loanres {
    customerId: string;
    description: string;
    id: string;
=======
import { loan_res_application as loanResModel} from "@prisma/client";

export class LoanResEntity implements loanResModel {
    id: string;
    customerId: string;
    description: string;
>>>>>>> f66e72dbb72c4fe778adbe06f4572f8a505f87d1
    loanId: string;
    type: string;
}
