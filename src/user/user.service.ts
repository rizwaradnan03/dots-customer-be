import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

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
      throw new Error('User already exists');
    }

    if (isEmailValid) {
      throw new Error('Email already exists');
    }

    if (createUserDto.password.length < 6) {
      throw new Error('Password less than 6 characters')
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
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const userUpdate = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!userUpdate) {
      throw new Error('User not found')
    }

    if (updateUserDto.password.length < 6) {
      throw new Error('Password less than 6 characters')
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
