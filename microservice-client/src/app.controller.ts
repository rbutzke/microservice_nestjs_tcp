import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';
@Controller()
export class AppController {
  constructor(@Inject('TESTE_SERVICE') private readonly client:   ClientProxy) { }
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get()
  getTeste() {
   this.client.emit<any>('message_printed', new Message('Teste de Comunicação'));
   return 'Teste de Comunicação printed';
  }
}