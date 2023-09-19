import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService
    ) { }

    async register(data: {
        fullName: string,
        identityNumber: string,
        birthDate: Date,
        birthPlace: string,
        motherMaidenName: string,
        email: string,
        referralCode: string,
        username: string,
        password: string,
    }) {

        if (data.password.length < 6) {
            return new UnauthorizedException('Password less than 6 characters')
        }

        const hashPassword = await bcrypt.hash(data.password, 10)

        const isUserValid = await this.prisma.users.findUnique({
            where: { username: data.username }
        })

        if (isUserValid) {
            return new UnauthorizedException("Username Sudah Ada")
        }

        const user = await this.prisma.users.create({
            data: {
                username: data.username,
                password: hashPassword,
            }
        })

        const customer = await this.prisma.customers.create({
            data: {
                fullName: data.fullName,
                identityNumber: data.identityNumber,
                birthDate: data.birthDate,
                birthPlace: data.birthPlace,
                motherMaidenName: data.motherMaidenName,
                email: data.email,
                referralCode: data.referralCode,
                userId: user.id,
                createdBy: user.id
            }
        })

        const notifications = await this.prisma.notifications.create({
            data: {
                customersId: customer.id,
                status: 1,
                message: "Selamat Datang " + customer.fullName + "!"
            }
        })

        return notifications.message
    }

    async validateUser(loginDto: LoginDto) {
        const isUserValid = await this.prisma.users.findFirst({
            where: { username: loginDto.username }
        })

        if (!isUserValid) {
            throw new NotFoundException(`No user found for username: ${loginDto.username}`);
        }

        const isPasswordValid = await bcrypt.compare(
            loginDto.password, isUserValid.password
        )

        if (loginDto.password.length < 6) {
            throw new UnauthorizedException('Password less than 6 characters');
        }

        if (!isPasswordValid) {
            throw new UnauthorizedException('Wrong Password');
        }

        const payload = { sub: isUserValid.id, name: isUserValid.username, email: isUserValid.email };

        return { token: this.jwt.sign(payload) }
    }

    async login(loginDto: LoginDto) {
        const isUserValid = await this.prisma.users.findFirst({
            where: { username: loginDto.username }
        })

        const payload = { sub: isUserValid.id, name: isUserValid.username, email: isUserValid.email, id: isUserValid.id };

        return { token: this.jwt.sign(payload) }
    }

}