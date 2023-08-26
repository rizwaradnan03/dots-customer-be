import { OmitType } from "@nestjs/mapped-types";
import { SavingEntity } from "../entities/saving.entity";

export class CreateSavingDto extends OmitType(SavingEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    account: string;
    userId: string;
    officeId: string;
}
