import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalAuthGuard } from './local-auth.guard';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.Strategy';

@Module({
  imports: [PassportModule,JwtModule.register({
    secret: 'secretkey',
    signOptions: {expiresIn: '24h'}
  }),],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, LocalAuthGuard, LocalStrategy]
})
export class AuthModule { }
