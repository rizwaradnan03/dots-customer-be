import { loans as loansModel} from "@prisma/client";

export class LoanEntity implements loansModel {
    accountNumber: string;
    customerId: string;
    id: string;
    loan: number;
    tenantId: number;
    isActive: number;
}
