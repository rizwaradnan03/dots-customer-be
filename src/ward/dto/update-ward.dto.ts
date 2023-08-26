import { OmitType } from '@nestjs/mapped-types';
import { WardEntity } from '../entities/ward.entity';

export class UpdateWardDto extends OmitType(WardEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    name: string;
    subdistrictId: string;
}
