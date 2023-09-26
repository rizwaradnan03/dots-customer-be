import { Injectable } from '@nestjs/common';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepositsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createDepositDto: CreateDepositDto, customerId: string) {
    const customer = await this.prisma.customers.findUnique({
      where: { id: customerId }
    })

    const crypto = require('crypto');

    function generateRandomInt() {
      return crypto.randomBytes(4).readUInt32LE(0);
    }

    const randomInt = generateRandomInt().toString();

    const deposit = await this.prisma.deposits.create({
      data: {
        ...createDepositDto,
        customerId,
        accountNumber: randomInt
      }
    })

    await this.prisma.notifications.create({
      data: {
        customerId,
        status: 1,
        message: "Customer " + customer.fullName + " Berhasil Membuat Akun Deposit!",
      }
    })

    return deposit
  }

  async findAll(customerId: string) {
    return await this.prisma.deposits.findMany({
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      },
      where: { customerId }
    })
  }

  async findAllByTenant(customerId: string, tenantId: number) {
    return await this.prisma.deposits.findMany({
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      },
      where: {
        AND: [
          {
            customerId: customerId
          },
          {
            tenantId: tenantId
          }
        ]
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.deposits.findFirst({
      where: { id },
      include: {
        tenant: {
          select: {
            name: true
          }
        }
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.deposits.update({
      where: { id },
      data: { isActive: 0 }
    });
  }
}
