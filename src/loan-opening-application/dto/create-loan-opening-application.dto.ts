import { OmitType } from "@nestjs/mapped-types";
import { LoanOpeningApplication } from "../entities/loan-opening-application.entity";

export class CreateLoanOpeningApplicationDto  extends OmitType(LoanOpeningApplication,[]) {
    amount : number;
    tenor : number;
    reason : string;
    customerId : string
}
