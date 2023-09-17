import { reservations as ReservationModel } from "@prisma/client";

export class ReservationEntity implements ReservationModel {
    id: string;
    officeDestination: number;
    reason: string;
    attendAtStart: Date;
    createdAt: Date;
    deletedAt: Date;
    isActive: number;
    createdById: string;
}
