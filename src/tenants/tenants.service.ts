import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createTenantDto: CreateTenantDto) {
    return await this.prisma.tenants.create({
      data: createTenantDto
    });
  }

  async findAll() {
    return await this.prisma.tenants.findMany({
      select: {
        id: true,
        name: true
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.tenants.findUnique({
      where: { id },
      select: {
        id: true, 
        name: true
      }
    });
  }

  async update(id: number, updateTenantDto: UpdateTenantDto) {
    return await this.prisma.tenants.update({
      where: { id },
      data: updateTenantDto
    });
  }

  async remove(id: number) {
    return await this.prisma.tenants.delete({
      where: { id }
    });
  }
}
