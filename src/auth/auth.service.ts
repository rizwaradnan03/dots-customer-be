import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService
    ) { }

    async register(
        full_name: string,
        identity_number: string,
        birth_date: Date,
        birth_place: string,
        mother_maiden_name: string,
        email: string,
        username: string,
        password: string
    ) {
        const customer = await this.prisma.customers.create({
            data: {
                full_name,
                identity_number,
                birth_date,
                birth_place,
                mother_maiden_name,
                email
            }
        })

        const isPasswordValid = await this.prisma.users.findFirst({
            where: { password: password }
        })

        if (isPasswordValid.password.length < 6) {
            return new UnauthorizedException('Password less than 6 characters')
        }

        const hashPassword = await bcrypt.hash(isPasswordValid.password, 10)

        const user = await this.prisma.users.create({
            data: {
                username: username,
                password: hashPassword,
                ...UserEntity,
                customer_id: customer.id
            }
        })

        return { customer, user }
    }

    // async validateUser(loginDto: LoginDto): Promise<{ token: string }> {
    //     const isUserValid = await this.prisma.users.findUnique({
    //         where: { username: loginDto.username }
    //     })

    //     if (!isUserValid) {
    //         throw new NotFoundException(`No user found for username: ${loginDto.username}`);
    //     }

    //     const isPasswordValid = await bcrypt.compare(
    //         loginDto.password, isUserValid.password
    //     )

    //     if (loginDto.password.length < 6) {
    //         throw new UnauthorizedException('Password less than 6 characters');
    //     }

    //     if (!isPasswordValid) {
    //         throw new UnauthorizedException('Wrong Password');
    //     }

    //     const payload = { sub: isUserValid.id, username: isUserValid.username, name: isUserValid.name, email: isUserValid.email };

    //     return { token: this.jwt.sign(payload) }

    // }

    // async login(loginDto: LoginDto) {
    //     const isUserValid = await this.prisma.user.findUnique({
    //         where: { username: loginDto.username }
    //     })

    //     if (!isUserValid) {
    //         throw new NotFoundException(`No user found for username: ${loginDto.username}`);
    //     }

    //     const payload = { sub: isUserValid.id, username: isUserValid.username, name: isUserValid.name, email: isUserValid.email };

    //     return { token: this.jwt.sign(payload) }
    // }

}