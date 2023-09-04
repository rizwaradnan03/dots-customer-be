import { Service as ServiceModel } from "@prisma/client";

export class ServiceEntity implements ServiceModel{
    id: string;
    purpose: string;
}
