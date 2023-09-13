import { OmitType } from "@nestjs/mapped-types";
import { Transaction } from "../entities/transaction.entity";

export class CreateTransactionDto extends OmitType(Transaction,[
    "id"
]) {
    amount: number;
    savingId: string;
    transactionType : number
    status : number
}
