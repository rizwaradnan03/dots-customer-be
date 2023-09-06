import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { BadRequest, InternalServerError, NotFound, OK } from 'src/helper/base.response';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const isUserValid = await this.prisma.user.findUnique({
      where: { username: createUserDto.username }
    });

    const isEmailValid = await this.prisma.user.findUnique({
      where: {email: createUserDto.email}
    })

    if (isUserValid) {
      return new UnauthorizedException('User already exists');
    }

    if (isEmailValid) {
      return new UnauthorizedException('Email already exists');
    }

    if (createUserDto.password.length < 6) {
      return new UnauthorizedException('Password less than 6 characters')
    }

    const hashPassword = await bcrypt.hash(createUserDto.password, 10)

    const userCreate = {
      ...createUserDto,
      password: hashPassword
    }

    return await this.prisma.user.create({
      data: userCreate
    });
  }

  async findAll() {
    return await this.prisma.user.findMany(), OK();
  }

  async findOne(id: string) {
    const isUserValid =  await this.prisma.user.findUnique({
      where: { id }
    });

    if (!isUserValid) {
      return NotFound("User Not Found")
    }

    if (error) {
      return InternalServerError(), console.error();
      
    }

    return OK(), isUserValid
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const userUpdate = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!userUpdate) {
      NotFound()
      return
    }

    if (updateUserDto.password.length < 6) {
      BadRequest('Password less than 6 characters')
    }

    const updatedUser = { ...userUpdate, ...updateUserDto }

    if (updateUserDto.password) {
      const hashPassword = await bcrypt.hash(updateUserDto.password, 10);
      updatedUser.password = hashPassword
    }

    return await this.prisma.user.update({
      where: { id },
      data: updatedUser
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: { id }
    });
  }


    
}
