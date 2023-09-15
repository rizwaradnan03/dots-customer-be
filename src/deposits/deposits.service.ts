import { Injectable } from '@nestjs/common';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepositsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createDepositDto: CreateDepositDto) {
    
  }

  async findAll() {
    return await this.prisma.deposits.findMany({
        include:{
          tenant:{
            select:{
              name:true
            }
          }
        }
    })
  }

  async findOne(id: string) {
    return await this.prisma.deposits.findFirst({
      where: {id},
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      }
    })
  }

  update(id: number, updateDepositDto: UpdateDepositDto) {
    return `This action updates a #${id} deposit`;
  }

  remove(id: number) {
    return `This action removes a #${id} deposit`;
  }
}
