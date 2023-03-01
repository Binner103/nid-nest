import { Module } from '@nestjs/common';
import { UserCreateController } from './controllers/user-create.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';

@Module({
  controllers: [UserCreateController],
  providers: [CreateUserCommandHandler],
})
export class UserCreateModule {}
