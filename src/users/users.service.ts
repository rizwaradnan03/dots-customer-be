import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Customers, Users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma:PrismaService){}

  async create(
    full_name: string,
    identity_number: string,
    birth_date: Date,
    birth_place: string,
    mother_maiden_name: string,
    username: string,
    password: string
  ){
    return await this.prisma.customers.create() ;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
