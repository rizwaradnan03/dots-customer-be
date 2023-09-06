import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors();
  
  
  await app.listen(process.env.PORT, '192.168.18.253', () => {
    console.log('connected on PORT ' + process.env.PORT);
  });
}

bootstrap();
