import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Mengaktifkan penyediaan file statis dari direktori 'uploads'
  app.use('/image', express.static(join(__dirname, 'img')));

  const config = new DocumentBuilder()
    .setTitle('DOTS Customer BE')
    .setDescription('list of api')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

<<<<<<< HEAD
  await app.listen(process.env.PORT, '192.168.18.210', () => {
=======
  await app.listen(process.env.PORT, '192.168.18.105', () => {
>>>>>>> 0f75463d7003b98a3184e4a017278fe64767c785
    console.log('connected on PORT ' + process.env.PORT);
  });
}

bootstrap();
