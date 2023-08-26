import { OmitType } from "@nestjs/mapped-types";
import { SubdistrictEntity } from "../entities/subdistrict.entity";

export class CreateSubdistrictDto extends OmitType(SubdistrictEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    name: string;
    cityId: string;
}
