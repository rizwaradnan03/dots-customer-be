import { Subdistrict as SubdistrictModel } from "@prisma/client";

export class SubdistrictEntity implements SubdistrictModel {
    id: string;
    name: string;
    cityId: string;
    createdAt: Date;
    updatedAt: Date;
}
