import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return await this.prisma.users.findMany();
  }

  async findAllIsActive() {
    return await this.prisma.users.findMany({
      where: {
        isActive: 1
      }
    });
  }

  async findAllNotActive() {
    return await this.prisma.users.findMany({
      where: {
        isActive: 1
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return await this.prisma.users.update({
      where: { id },
      data: {
        isActive: 1
      }

    })
  }
}
