import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:
        true /**Whitelis hace que todo lo que no definí para la BD en el DTO se borre automaticamente */,
      /*forbidNonWhitelisted:
        true Esto lo que hace es que te dice que hay un problema y para, el whitelis simplemente lo ignora,*/
    }),
  );
  await app.listen(3000);
}
bootstrap();
