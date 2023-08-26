import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors
  await app.listen(process.env.PORT,'192.168.1.9',()=>{
    console.log('BERHASIL TOD')
  });
}
bootstrap();
