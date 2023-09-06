import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WardService } from './ward.service';
import { CreateWardDto } from './dto/create-ward.dto';
import { UpdateWardDto } from './dto/update-ward.dto';
import { BaseResponse, OK } from 'src/helper/base.response';

@Controller('ward')
export class WardController {
  constructor(private readonly wardService: WardService) {}

  @Post()
  create(@Body() createWardDto: CreateWardDto) {
    try {
      const response = new BaseResponse(201, "Created")
      return this.wardService.create(createWardDto), console.log(response);
    } catch (error) {
      console.log(new BaseResponse(400, "Bad Request"), error)
    }
  }

  @Get()
  findAll() {
    try {
      return this.wardService.findAll(), OK();
    } catch (error) {
      console.log(new BaseResponse(400, "Bad Request"), error)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      const response = new BaseResponse(201, "Created")
      return this.wardService.findOne(id), console.log;
    } catch (error) {
      console.log(new BaseResponse(400, "Bad Request"), error)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWardDto: UpdateWardDto) {
    return this.wardService.update(id, updateWardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wardService.remove(id);
  }

  @Get('view/')
  async findView(){
    return await this.wardService.findView()
  }

}
