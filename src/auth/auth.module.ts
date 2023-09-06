import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalAuthGuard } from './local-auth.guard';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.Strategy';
import { SessionSerialized } from './session.serialized';

@Module({
  imports: [JwtModule.register({
    secret: '12345',
    signOptions: {expiresIn:'1h'}
  }),PassportModule,PassportModule.register({
    session : true
  })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, LocalAuthGuard, LocalStrategy, SessionSerialized]
})
export class AuthModule { }
