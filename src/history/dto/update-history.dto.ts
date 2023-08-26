import { OmitType } from '@nestjs/mapped-types';
import { HistoryEntity } from '../entities/history.entity';

export class UpdateHistoryDto extends OmitType(HistoryEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    name: string;
    userId: string;
}
