import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService){}

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  async findAll() {
    return await this.prisma.customers.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  // update(id: number, updateCustomerDto: UpdateCustomerDto, req: Request) {
  //   const userId = req.user.id;
  // }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
