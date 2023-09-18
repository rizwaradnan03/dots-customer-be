import { savings as SavingModel} from "@prisma/client";

export class SavingEntity implements SavingModel {
    id: string;
    accountNumber: string;
    availableBalance: number;
    createdAt: Date;
    createdBy: string;
    currentBalance: number;
    customerId: string;
    deletedAt: Date;
    deletedBy: string;
    lastSyncedAt: Date;
    tenantId: number;
    updatedAt: Date;
    updatedBy: string
    isActive: number;
}
