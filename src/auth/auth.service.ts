import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';
import { LoginDto } from './dto/login-auth.dto';
import { OK } from 'src/helper/base.response';
import * as bcrypt from 'bcrypt';
import passport from 'passport';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService
    ) { }

    async register(data: {
        full_name: string,
        identity_number: string,
        birth_date: Date,
        birth_place: string,
        mother_maiden_name: string,
        email: string,
        referral_code: string,
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
                    full_name: data.full_name,
                    birth_date: data.birth_date,
                    birth_place: data.birth_place,
                    mother_maiden_name: data.mother_maiden_name,
                    email: data.email,
                    referral_code: data.referral_code
                }
            })
    
            const user = await this.prisma.users.create({
                data: {
                    username: data.username,
                    password: hashPassword,
                    ...UserEntity,
                    customerId: customer.id
                }
            })
    
            return { customer, user }
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