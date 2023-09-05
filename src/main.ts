import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
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
  app.use(passport.session();)
  app.enableCors();
  
  
  await app.listen(process.env.PORT, '192.168.18.210', () => {
    console.log('connected on PORT ' + process.env.PORT);
  });
}

bootstrap();
