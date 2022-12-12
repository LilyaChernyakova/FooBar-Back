/*eslint-disable*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
      .setTitle('FooBar example')
      .setDescription('The FooBar API description')
      .setVersion('1.0')
      .addTag('foobar')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  // http://localhost:3000/swagger#/

  app.enableCors(options);
  await app.listen(3000);
}

bootstrap();
