import { Module } from '@nestjs/common';
import { UserCreateController } from './controllers/user-create.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';
import { UserCreatedEventHandler } from './events/user-created.event.handler';

@Module({
  controllers: [UserCreateController],
  providers: [CreateUserCommandHandler, UserCreatedEventHandler],
})
export class UserCreateModule {}
