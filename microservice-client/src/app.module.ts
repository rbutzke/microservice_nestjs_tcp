import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
@Module({
  imports: [
   ClientsModule.register([
    { name: 'TESTE_SERVICE', transport: Transport.TCP, options:{ port:3000 } },
   ]),
 ],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {
}
