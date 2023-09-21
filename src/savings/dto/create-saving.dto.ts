import { OmitType } from "@nestjs/mapped-types";
import { SavingEntity } from "../entities/saving.entity";

export class CreateSavingDto extends OmitType(SavingEntity, []) {
    accountNumber: number
    tenantId: number
}
