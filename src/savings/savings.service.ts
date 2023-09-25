import { Injectable } from '@nestjs/common';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSavingDto } from './dto/create-saving.dto';

@Injectable()
export class SavingsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSavingDto: CreateSavingDto, customerId: string) {
    const customer = await this.prisma.customers.findFirst({
      where: { id: customerId }
    })

    const crypto = require('crypto');

    function generateRandomInt() {
      return crypto.randomBytes(4).readUInt32LE(0);
    }

    const randomInt = generateRandomInt().toString();

    const saving = await this.prisma.savings.create({
      data: {
        ...createSavingDto,
        customerId,
        createdBy: customer.userId,
        accountNumber: randomInt
      }
    })

    await this.prisma.notifications.create({
      data: {
        customersId: customer.id,
        status: 1,
        message: "Customer " + customer.fullName + " Berhasil Membuat Akun Tabungan!",
        savingId: saving.id
      }
    })

    return saving
  }

  async depositSaving(savingId: string, data: { amount: number }) {
    const saving = await this.prisma.savings.findUnique({
      where: { id: savingId }
    })

    const customer = await this.prisma.customers.findUnique({
      where: { id: saving.customerId },
    })

    const updatedSaving = await this.prisma.savings.update({
      where: { id: savingId },
      data: {
        currentBalance: saving.currentBalance + data.amount,
        updatedBy: customer.userId
      }
    })

    await this.prisma.notifications.create({
      data: {
        customersId: customer.id,
        status: 1,
        message: "Customer a.n " + customer.fullName + " Berhasil Melakukan Setor Tabungan Sebanyak " + data.amount,
        savingId: saving.id,
      }
    })

    return updatedSaving

  }

  async findAll(customerId: string) {
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
      where: { customerId }
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
    const saving = await this.prisma.savings.findFirst({
      where: { id }
    })

    const customer = await this.prisma.customers.findFirst({
      where: { id: saving.customerId },
      select: { userId: true }
    })

    return await this.prisma.savings.update({
      where: { id },
      data: {
        ...updateSavingDto,
        updatedBy: customer.userId
      }
    });
  }

  async remove(id: string) {
    const saving = await this.prisma.savings.findFirst({
      where: { id }
    })

    const customer = await this.prisma.customers.findFirst({
      where: { id: saving.id },
      select: { userId: true }
    })

    await this.prisma.savings.update({
      where: { id },
      data: {
        deletedBy: customer.userId,
        isActive: 0
      }
    })
  }
}
