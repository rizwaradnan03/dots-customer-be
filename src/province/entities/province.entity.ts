import { Province as ProvinceModel } from "@prisma/client";

export class ProvinceEntity implements ProvinceModel {
    id: string;
    name: string;
    
    createdAt: Date;
    updatedAt: Date;   
}
