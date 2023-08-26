import { Credit as CreditModel } from "@prisma/client";

export class CreditEntity implements CreditModel{
    id: string;
    account: string;
    userId: string;
    officeId: string;

    createdAt: Date;
    updatedAt: Date;
}
