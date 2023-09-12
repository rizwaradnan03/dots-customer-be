import { reservations as ReservationModel } from "@prisma/client";

export class ReservationEntity implements ReservationModel {
    id: string;
    branchId: string;
    destinationService: number;
    reason: string;
    attendAtEnd: Date;
    attendAtStart: Date;
    createdAt: Date;
    deletedAt: Date;
    isActive: boolean;
    createdById: string;
}
