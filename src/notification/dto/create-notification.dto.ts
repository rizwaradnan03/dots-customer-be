import { OmitType } from "@nestjs/mapped-types";
import { NotificationEntity } from "../entities/notification.entity";
import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateNotificationDto extends OmitType(NotificationEntity, ['id']) {
    @IsNotEmpty()
    customersId: string;

    @IsNotEmpty()
    status: number;

    @IsNotEmpty()
    message: string;

    @IsNotEmpty()
    isOpened: number;
}
