import { OmitType } from "@nestjs/mapped-types";
import { HistoryEntity } from "../entities/history.entity";

export class CreateHistoryDto extends OmitType(HistoryEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    name: string;
    userId: string;
}
