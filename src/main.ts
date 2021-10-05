import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3002;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors( {origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true});
  await app.listen(PORT);
}

bootstrap();
