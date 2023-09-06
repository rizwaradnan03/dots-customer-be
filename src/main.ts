import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as session from 'express-session';
import * as passport from 'passport'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(session({
    secret : '12345',
    resave : false,
    saveUnitialized : false,
    cookie: {maxAge : 1000},
  })
  );

  app.use(passport.initialize());
  app.use(passport.session())
  app.enableCors();

  app.use('/img', express.static('img'));
  
  await app.listen(process.env.PORT, '192.168.18.253', () => {
    console.log('connected on PORT ' + process.env.PORT);
  });
}

bootstrap();
