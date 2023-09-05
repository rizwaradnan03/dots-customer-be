import { Reservation as ReservationModel } from "@prisma/client";

export class ReservationEntity implements ReservationModel{
    id: string;
    purpose: string;
    date: Date;
    time: string;
    qrcodedata: string;
    service: string;
    officeDestinationId: string;
    isactive: string;

    createdAt: Date;
    updatedAt: Date;
}
