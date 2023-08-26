import { OmitType } from "@nestjs/mapped-types";
import { DepositEntity } from "../entities/deposit.entity";

export class CreateDepositDto extends OmitType(DepositEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    account: string;
    userId: string;
    officeId: string;
}
