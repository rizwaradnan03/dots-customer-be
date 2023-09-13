import { transactions as TransactionModel  } from "@prisma/client";

export class Transaction implements TransactionModel {
    amount: number;
    createdAt: Date;
    createdBy: string;
    id: string;
    savingId: string;
    status: number;
    tenantId: number; 
    transactionType: number;
}
