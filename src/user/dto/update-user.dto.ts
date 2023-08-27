import { OmitType } from '@nestjs/mapped-types';
import { UserEntity } from "../entities/user.entity";
import { IsNotEmpty, IsEmail, IsDate, IsOptional, Length} from "@nestjs/class-validator";

export class UpdateUserDto extends OmitType(UserEntity, [
    'id', 'createdAt', 'updatedAt'
]) {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    nik: string

    @IsNotEmpty()
    placeOfBirth: string

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
    @Length(6)
    password: string
}
