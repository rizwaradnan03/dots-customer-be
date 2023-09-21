import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notification')
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return await this.notificationService.create(createNotificationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.notificationService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.notificationService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return await this.notificationService.update(id, updateNotificationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('opened/:id')
  async updateIsOpened(@Param('id') id: string) {
    return await this.notificationService.updateIsOpened(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.notificationService.remove(id);
  }
}
