import { OmitType } from "@nestjs/mapped-types";
import { ReservationEntity } from "../entities/reservation.entity";

export class CreateReservationDto extends OmitType(ReservationEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    purpose: string;
    date: Date;
    time: string;
    qrcodedata: string;
    service: string;
    officeDestinationId: string;
    isactive: string;
}
 