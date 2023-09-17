import { savings as SavingModel} from "@prisma/client";

export class SavingEntity implements SavingModel {
    accountNumber: string;
    availableBalance: number;
    createdAt: Date;
    createdBy: string;
    currentBalance: number;
    customerId: string;
    deletedAt: Date;
    deletedBy: string;
    id: string;
    lastSyncedAt: Date;
    tenantId: number;
    updatedAt: Date;
    updatedBy: string
    isActive: number;
}
