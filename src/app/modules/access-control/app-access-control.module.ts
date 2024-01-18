import { Module } from '@nestjs/common';
import { AppAccessControlController } from './controllers/app-access-control.controller';
import { ConfigModule } from '@nestjs/config';
import { AppAbilityFactory } from './providers/app-ability.factory';
import appAccessControlConfig from './configs/app-access-control.config';

@Module({
  controllers: [AppAccessControlController],
  imports: [ConfigModule.forFeature(appAccessControlConfig)],
  providers: [AppAbilityFactory],
})
export class AppAccessControlModule {}
