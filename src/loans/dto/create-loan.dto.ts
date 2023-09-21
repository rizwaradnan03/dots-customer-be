import { OmitType } from "@nestjs/mapped-types";
import { LoanEntity } from "../entities/loan.entity";

export class CreateLoanDto extends OmitType(LoanEntity, []) {
    accountNumber: string
    tenantId: number
}
