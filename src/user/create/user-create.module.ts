import { Module } from '@nestjs/common';
import { UserCreateController } from './controllers/user-create.controller';

@Module({
  controllers: [UserCreateController]
})
export class UserCreateModule {}
