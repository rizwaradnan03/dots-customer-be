import {notifications as notificationsModel} from "@prisma/client";

export class NotificationEntity implements notificationsModel{
    id: string;
    customersId: string;
    status: number;
    message: string;
    isOpened: number;
    loanId: string;
    reservationId: string;
}
