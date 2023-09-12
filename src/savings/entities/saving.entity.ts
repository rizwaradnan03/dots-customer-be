import { savings as SavingModel} from "@prisma/client";

export class SavingEntity implements SavingModel {
    id: string;
    externalId: string;
    currentBalance: number;
    availableBalance: number;
    status: number;
    productType: string;
    lastSyncedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    updatedById: string;
    createdById: string;
    customerId: string;
    deletedById: string;
}
