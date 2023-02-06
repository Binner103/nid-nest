import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { AppService } from './providers/app.service';
import appConfig from './configs/app.config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [appConfig] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
