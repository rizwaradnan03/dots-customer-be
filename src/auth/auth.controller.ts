import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() data: {
    full_name: string,
    identity_number: string
    birth_date: Date,
    birth_place: string,
    mother_maiden_name: string,
    email: string,
    username: string,
    password: string
  }) {
    return await this.authService.register(data)
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Body() LoginDto: LoginDto) {
  //   return await this.authService.validateUser(LoginDto);
  // }

  // @Post('register')
  // async register(@Body() loginDto: LoginDto) {
  //   // Validasi dan logika pendaftaran pengguna dilakukan dalam AuthService
  //   return await this.authService.validateUser(loginDto);
  // }
}
