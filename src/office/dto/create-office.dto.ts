import { OmitType } from "@nestjs/mapped-types";
import { OfficeEntity } from "../entities/office.entity";

export class CreateOfficeDto extends OmitType(OfficeEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    name: string;
    email: string;
    phone: string;
    address: string;
    provinceId: string;
    cityId: string;
}
