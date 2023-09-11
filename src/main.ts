import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'
import * as express from 'express'; 
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors();
  
  // Mengaktifkan penyediaan file statis dari direktori 'uploads'
  app.use('/image', express.static(join(__dirname, 'img')));

  
  await app.listen(process.env.PORT, '192.168.18.253', () => {
    console.log('connected on PORT ' + process.env.PORT);
  });
}

bootstrap();
