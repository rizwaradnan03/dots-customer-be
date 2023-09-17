import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() data: {
    fullName: string,
    identityNumber: string
    birthDate: Date,
    birthPlace: string,
    motherMaidenName: string,
    email: string,
    referralCode: string,
    username: string,
    password: string
  }) {
    return await this.authService.register(data)
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() LoginDto: LoginDto) {
    return await this.authService.validateUser(LoginDto);
  }

}
