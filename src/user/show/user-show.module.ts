import { Module } from '@nestjs/common';
import { UserShowController } from './controllers/user-show.controller';

@Module({
  controllers: [UserShowController]
})
export class UserShowModule {}
