import { KafkaConsumeService } from './infra/http/messaging/kafka/kafka-consumer.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsumeService = app.get(KafkaConsumeService);

  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumeService,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}

bootstrap();
