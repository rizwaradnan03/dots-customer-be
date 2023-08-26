import { OmitType } from "@nestjs/mapped-types";
import { ProvinceEntity } from "../entities/province.entity";
import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateProvinceDto extends OmitType(ProvinceEntity, ['id', 'createdAt', 'updatedAt']) {
    @IsNotEmpty()
    name: string;
}