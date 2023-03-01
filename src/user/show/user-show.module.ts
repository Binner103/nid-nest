import { Module } from '@nestjs/common';
import { UserShowController } from './controllers/user-show.controller';
import { GetUserQueryHandler } from './queris/get-user.query.handler';

@Module({
  controllers: [UserShowController],
  providers: [GetUserQueryHandler],
})
export class UserShowModule {}
