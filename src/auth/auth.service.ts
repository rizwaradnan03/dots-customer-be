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
        console.log(data)
        if (data.password.length == null) {
            return new UnauthorizedException("bruhk")
        }

        if (data.password.length < 6) {
            return new UnauthorizedException('Password less than 6 characters')
        }

        const hashPassword = await bcrypt.hash(data.password, 10)

        try {
            const customer = await this.prisma.customers.create({
                data: {
                    fullName: data.fullName,
                    identityNumber: data.identityNumber,
                    birthDate: data.birthDate,
                    birthPlace: data.birthPlace,
                    motherMaidenName: data.motherMaidenName,
                    email: data.email,
                    referralCode: data.referralCode,
                }
            })

            const user = await this.prisma.users.create({
                data: {
                    username: data.username,
                    password: hashPassword,
                    customerId: customer.id
                }
            })

            const customerCreatedBy = await this.prisma.customers.update({
                where: {
                    id: customer.id
                },
                data: {
                    createdBy: user.id
                }
            })

            return { user, customerCreatedBy }

        } catch (error) {
            console.error("Terjadi kesalahan saat membuat user atau customer:", error);
            throw error;
        }
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

        const payload = { sub: isUserValid.id, name: isUserValid.username, email: isUserValid.email };

        return { token: this.jwt.sign(payload) }
    }

}