import { OmitType } from "@nestjs/mapped-types";
import { DepositEntity } from "../entities/deposit.entity";

export class CreateDepositDto extends OmitType(DepositEntity, [])  {
    accountNumber: number
    tenantId: number
}
