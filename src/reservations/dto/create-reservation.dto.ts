    import { OmitType } from "@nestjs/mapped-types";
    import { ReservationEntity } from "src/reservations/entities/reservation.entity";

    export class CreateReservationDto extends OmitType(ReservationEntity,[]) {
        officeDestination : number;
        reason: string;
        attendAtStart: Date;
        time: string
    }
