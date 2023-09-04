import { OmitType } from "@nestjs/mapped-types";
import { ReservationEntity } from "../entities/reservation.entity";

export class CreateReservationDto extends OmitType(ReservationEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    reason: string;
    date: Date;
    time: string;
    qrcodedata: string;
    officeDestinationId: string;
    serviceId: string;
    isactive: string;
}
 