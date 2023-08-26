import { Savings as SavingsModel} from "@prisma/client";

export class SavingEntity implements SavingsModel {
    id: string;
    account: string;
    userId: string;
    officeId: string;
    
    createdAt: Date;
    updatedAt: Date;
}
