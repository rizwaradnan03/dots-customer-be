import { User as UserModel } from "@prisma/client";

export class UserEntity implements UserModel {
    id: string;
    name: string;
    nik: string
    placeOfBirth: string
    dateOfBirth: Date
    biologicalMotherName: string
    email: string
    referralCode: string
    username: string
    password: string
    
    createdAt: Date;
    updatedAt: Date;
}
