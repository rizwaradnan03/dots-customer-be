import {notifications as notificationsModel} from "@prisma/client";

export class NotificationEntity implements notificationsModel{
    id: string;
    customerId: string;
    status: number;
    message: string;
    messageDetail: string;
    amount: number;
    isOpened: number;
    loanId: string;
    reservationId: string;
    savingId: string;
}
