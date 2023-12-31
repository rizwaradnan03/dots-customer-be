import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use('/image', express.static(join(__dirname, 'img')));

  const config = new DocumentBuilder()
    .setTitle('DOTS Customer BE')
    .setDescription('list of api')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT, () => {
    console.log('connected on PORT ' + process.env.PORT);
  });
}

bootstrap();
