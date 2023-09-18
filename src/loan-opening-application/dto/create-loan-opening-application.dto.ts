import { OmitType } from "@nestjs/mapped-types";
import { LoanOpeningEntity } from "../entities/loan-opening-application.entity";

export class CreateLoanOpeningApplicationDto extends OmitType(LoanOpeningEntity, []) {
    amount: number
    reason: string
    tenor: number
    customerId: string
}
