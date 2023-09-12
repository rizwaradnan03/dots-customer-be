import { OmitType } from "@nestjs/mapped-types";
import { Reservation } from "src/reservations/entities/reservation.entity";

export class CreateReservationDto extends OmitType(Reservation,[]) {
    branchId: string;
    destinationService: number;
    reason: string;
    attendAtEnd: Date;
    attendAtStart: Date;
}
