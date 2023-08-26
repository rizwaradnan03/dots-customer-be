import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CityEntity } from '../entities/city.entity';

export class UpdateCityDto extends OmitType(CityEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    name: string;
    provinceId: string;
}
