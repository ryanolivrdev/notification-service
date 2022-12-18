import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumeService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notification',
        brokers: [''],

        sasl: {
          mechanism: 'scram-sha-256',

          username: '',

          password: '',
        },

        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
