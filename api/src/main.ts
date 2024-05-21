import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
