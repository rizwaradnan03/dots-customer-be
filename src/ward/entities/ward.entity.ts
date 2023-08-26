import { Ward as WardModel } from "@prisma/client";

export class WardEntity implements WardModel{
    id: string;
    name: string;
    subdistrictId: string;
    createdAt: Date;
    updatedAt: Date;
}
