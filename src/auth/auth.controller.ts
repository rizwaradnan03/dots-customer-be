import { Controller, Post, Body, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) { }
  
    @UseGuards(LocalAuthGuard )
    @Post('')
    async create(@Body() loginDto: LoginDto) {
      return await this.authService.login(loginDto);
    } 
}
