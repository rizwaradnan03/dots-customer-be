import { savings as SavingModel} from "@prisma/client";

export class SavingEntity implements SavingModel {
    id: string;
    externalId: string;
    currentBalance: number;
    availableBalance: number;
    lastSyncedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    customerId: string;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
    // productType: string;
    // status: number;
}
