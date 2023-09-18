import { OmitType } from "@nestjs/mapped-types";
import {LoanOpeningEntity } from "../entities/loan-opening-application.entity";

export class CreateLoanOpeningDto  extends OmitType(LoanOpeningEntity,[]) {
    amount : number;
    tenor : number;
    reason : string;
    loanId: string
}
