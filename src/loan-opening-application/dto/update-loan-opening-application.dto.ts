import { OmitType } from "@nestjs/mapped-types";
import { LoanOpeningEntity } from "../entities/loan-opening-application.entity";

export class loanOpeningDto extends OmitType(LoanOpeningEntity, []) {
    
}