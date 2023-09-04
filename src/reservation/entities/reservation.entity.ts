import { Reservation as ReservationModel } from "@prisma/client";

export class ReservationEntity implements ReservationModel{
    id: string;
    reason: string;
    date: Date;
    time: string;
    qrcodedata: string;
    officeDestinationId: string;
    isactive: string;
    serviceId: string;
    createdAt: Date;
    updatedAt: Date;
}
