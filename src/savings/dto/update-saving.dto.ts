import { OmitType, PartialType } from '@nestjs/mapped-types';
import { SavingEntity } from '../entities/saving.entity';

export class UpdateSavingDto extends OmitType(SavingEntity,[]) {
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
