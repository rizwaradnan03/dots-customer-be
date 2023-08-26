import { OmitType } from "@nestjs/mapped-types";
import { CityEntity } from "../entities/city.entity";

export class CreateCityDto extends OmitType(CityEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    name: string;
    provinceId: string;
}

