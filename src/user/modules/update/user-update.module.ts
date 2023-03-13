import { Module } from '@nestjs/common';
import { UserUpdateController } from './controllers/user-update.controller';

@Module({
  controllers: [UserUpdateController]
})
export class UserUpdateModule {}
