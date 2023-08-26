import { City as CityModel } from "@prisma/client";

export class CityEntity implements CityModel {
    id: string
    name: string
    provinceId: string

    createdAt: Date;
    updatedAt: Date;
}
