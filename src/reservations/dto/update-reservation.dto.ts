import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';
import { ReservationEntity } from '../entities/reservation.entity';

export class UpdateReservationDto extends OmitType(ReservationEntity,[]) {
    destinationService: number;
    reason: string;
    attendAtStart: Date;
    attendAtEnd: Date;
    isActive: boolean
}
