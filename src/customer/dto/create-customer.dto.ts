import { OmitType } from "@nestjs/mapped-types";
import { CustomerEntity } from "../entities/customer.entity";

export class CreateCustomerDto extends OmitType(CustomerEntity, [
    "id", "created_at"
]) {
    full_name: string;
    gender: string;
    birth_date: Date;
    birth_place: string;
    mother_maiden_name: string;
    email: string;
}
