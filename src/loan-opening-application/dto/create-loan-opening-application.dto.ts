import { OmitType } from "@nestjs/mapped-types";
<<<<<<< HEAD
import { LoanOpeningApplication } from "../entities/loan-opening-application.entity";

export class CreateLoanOpeningApplicationDto  extends OmitType(LoanOpeningApplication,[]) {
    amount : number;
    tenor : number;
    reason : string;
    customerId : string
=======
import { LoanOpeningEntity } from "../entities/loan-opening-application.entity";

export class CreateLoanOpeningApplicationDto extends OmitType(LoanOpeningEntity, []) {
    amount: number
    reason: string
    tenor: number
    customerId: string
>>>>>>> f66e72dbb72c4fe778adbe06f4572f8a505f87d1
}
