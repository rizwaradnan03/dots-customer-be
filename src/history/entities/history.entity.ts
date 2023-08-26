import { History as HistoryModel } from "@prisma/client";

export class HistoryEntity implements HistoryModel {
    id: string; 
    name: string;
    userId: string;

    createdAt: Date;
    updatedAt: Date;
}
