import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() LoginDto: LoginDto) {
    return await this.authService.validateUser(LoginDto);
  }

  @Post('register')
  async register(@Body() loginDto: LoginDto) {
    // Validasi dan logika pendaftaran pengguna dilakukan dalam AuthService
    return await this.authService.validateUser(loginDto);
  }
}
