import { Deposit as DepositModel } from "@prisma/client";

export class DepositEntity implements DepositModel {
    id: string;
    account: string;
    userId: string;
    officeId: string;

    createdAt: Date;
    updatedAt: Date;
}
