import { OmitType } from '@nestjs/mapped-types';
import { ReservationEntity } from '../entities/reservation.entity';

export class UpdateReservationDto extends OmitType(ReservationEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    reason: string;
    // date: Date;
    time: string;
    qrcodedata: string;
    officeDestinationId: string;
    isactive: string;
}
