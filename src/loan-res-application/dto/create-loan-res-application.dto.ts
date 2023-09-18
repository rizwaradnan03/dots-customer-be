import { OmitType } from "@nestjs/mapped-types";
import { LoanResApplication } from "../entities/loan-res-application.entity";

export class CreateLoanResApplicationDto extends OmitType(LoanResApplication,[])  {
    type : string;
    description : string;
}

