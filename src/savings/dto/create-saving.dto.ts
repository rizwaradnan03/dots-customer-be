import { OmitType } from "@nestjs/mapped-types";
import { SavingEntity } from "../entities/saving.entity";

export class CreateSavingDto extends OmitType(SavingEntity, []) {
    accountNumber: string
    availableBalance: number
    currentBalance: number
    customerId: string
    tenantId: number
    createdBy: string
}
