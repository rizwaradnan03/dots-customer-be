import { OmitType, PartialType } from '@nestjs/mapped-types';
import { SavingEntity } from '../entities/saving.entity';

export class UpdateSavingDto extends OmitType(SavingEntity,[]) {
    id: string
}
