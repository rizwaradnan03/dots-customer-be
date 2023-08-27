import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto) {
    return await this.historyService.create(createHistoryDto);
  }

  @Get()
  async findAll() {
    return await this.historyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.historyService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return await this.historyService.update(id, updateHistoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.historyService.remove(id);
  }

  @Get('view/')
  async findView(){
    return await this.historyService.findView()
  }

}
