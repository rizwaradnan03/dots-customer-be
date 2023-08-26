import { OmitType } from "@nestjs/mapped-types";
import { CreditEntity } from "../entities/credit.entity";

export class CreateCreditDto extends OmitType(CreditEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    account: string;
    userId: string;
    officeId: string;
}
