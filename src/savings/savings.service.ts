import { Injectable } from '@nestjs/common';
// import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSavingDto } from './dto/create-saving.dto';

@Injectable()
export class SavingsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSavingDto: CreateSavingDto) {
    const saving = await this.prisma.savings.create({
      data: createSavingDto
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: saving.customerId },
      select: { userId: true }
    })

    const createdBy = await this.prisma.savings.update({
      where: { id: saving.id },
      data: {
        createdBy: findUser.userId
      }
    })

    return createdBy
  }

  async depositSaving(savingId: string, amount: number) {
    const saving = await this.prisma.savings.findUnique({
      where: { id: savingId }
    })

    const customer = await this.prisma.customers.findFirst({
      where: { id: saving.customerId },
    })

    const updatedSaving = await this.prisma.savings.update({
      where: { id: savingId },
      data: {
        currentBalance: saving.currentBalance + amount,
        updatedBy: customer.userId
      }
    })

    console.log(updatedSaving)
  }

  async findAll() {
    return await this.prisma.savings.findMany({
      select: {
        id: true,
        accountNumber: true,
        tenantId: true,
        tenants: {
          select: {
            name: true
          }
        }
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.savings.findUnique({
      where: { id },
      include: {
        tenants: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async update(id: string, updateSavingDto: UpdateSavingDto) {
    const findSaving = await this.prisma.savings.findFirst({
      where: { id }
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: findSaving.customerId },
      select: { userId: true }
    })

    return await this.prisma.savings.update({
      where: { id },
      data: {
        ...updateSavingDto,
        updatedBy: findUser.userId
      }
    });
  }

  async remove(id: string) {
    const findSaving = await this.prisma.savings.findFirst({
      where: { id }
    })

    const findUser = await this.prisma.customers.findFirst({
      where: { id: findSaving.id },
      select: { userId: true }
    })

    await this.prisma.savings.update({
      where: { id },
      data: {
        deletedBy: findUser.userId,
        isActive: 0
      }
    })
  }
}
