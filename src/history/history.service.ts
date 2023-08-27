import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) { }

  async create(createHistoryDto: CreateHistoryDto) {
    return await this.prisma.history.create({
      data: createHistoryDto
    });
  }

  async findAll() {
    return await this.prisma.history.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.history.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateHistoryDto: UpdateHistoryDto) {
    return await this.prisma.history.update({
      where: {id},
      data: updateHistoryDto
    });
  }

  async remove(id: string) {
    return await this.prisma.history.delete({
      where: {id}
    });
  }

  async findView(){
    return await this.prisma.history.findMany({
      include:{
        user:{
          select:{
            id : true,
            name : true
          }
        }
      }
    })
  }

}
