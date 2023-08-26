import { OmitType } from '@nestjs/mapped-types';
import { SavingEntity } from '../entities/saving.entity';

export class UpdateSavingDto extends OmitType(SavingEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    account: string;
    userId: string;
    officeId: string;
}
