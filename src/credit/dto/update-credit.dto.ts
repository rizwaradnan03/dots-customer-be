import { OmitType } from '@nestjs/mapped-types';
import { CreditEntity } from '../entities/credit.entity';

export class UpdateCreditDto extends OmitType(CreditEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    account: string;
    userId: string;
    officeId: string;
}
