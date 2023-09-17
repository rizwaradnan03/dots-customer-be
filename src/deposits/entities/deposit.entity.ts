import { deposits as DepositModel } from "@prisma/client";

export class DepositEntity implements DepositModel{
   accountNumber: string;
   balance: number;
   customerId: string;
   id: string;
   tenantId: number;
   transactionId: string;
   isActive: number;
}
