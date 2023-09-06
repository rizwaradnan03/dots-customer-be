import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as session from 'express-session';
import * as passport from 'passport'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors();

  app.use('/img', express.static('img'));
  
  await app.listen(process.env.PORT, '192.168.18.210', () => {
    console.log('connected on PORT ' + process.env.PORT);
  });
}

bootstrap();
