import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
      "http://localhost:8080",
    ],
    credentials: true,
  });
  await app.listen(8081);
}
bootstrap();
