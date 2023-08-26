import { Office as OfficeModel } from "@prisma/client";

export class OfficeEntity implements OfficeModel{
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    provinceId: string;
    cityId: string;

    createdAt: Date;
    updatedAt: Date;
}
