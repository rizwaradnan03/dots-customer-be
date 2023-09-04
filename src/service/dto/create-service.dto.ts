import { OmitType } from "@nestjs/mapped-types";
import { ServiceEntity } from "../entities/service.entity";

export class CreateServiceDto extends OmitType(ServiceEntity, [
    "id"
]) {
    purpose: string;
}
