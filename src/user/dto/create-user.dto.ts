import { OmitType } from "@nestjs/mapped-types";
import { UserEntity } from "../entities/user.entity";
import { IsNotEmpty, IsEmail, IsDate, IsOptional } from "@nestjs/class-validator";

export class CreateUserDto extends OmitType(UserEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    nik: string

    @IsNotEmpty()
    placeOfBirth: string

    @IsOptional()
    @IsDate()
    dateOfBirth: Date

    @IsNotEmpty()
    biologicalMotherName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    referralCode: string

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string
}
