import { Controller, Post, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';

@Controller('login')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('')
    async create(@Body() loginDto: LoginDto) {
      return await this.authService.login(loginDto);
    }
}
