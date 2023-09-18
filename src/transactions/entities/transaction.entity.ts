import { transactions as TransactionModel } from "@prisma/client";

export class Transaction implements TransactionModel {
    amount: number;
    createdAt: Date;
    createdBy: string;
    id: string;
    savingId: string;
    status: number;
    tenantId: number;
    transactionType: number;
    depositId: string;
    title: string;
    interestPaid: number;
    loanId: string;
    penaltyPaid: number;
    principalPaid: number;
}
