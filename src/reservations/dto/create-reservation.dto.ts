import { OmitType } from "@nestjs/mapped-types";
import { ReservationEntity } from "src/reservations/entities/reservation.entity";

export class CreateReservationDto extends OmitType(ReservationEntity, []) {
    reason: string;
    attendAtStart: Date;
    time: string
    officeDestination: number; 
    service: string;
}
