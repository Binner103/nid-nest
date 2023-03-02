import { forwardRef, Module } from '@nestjs/common';
import { UserCreateController } from './controllers/user-create.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';
import { UserCreatedEventHandler } from './events/user-created.event.handler';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [UserCreateController],
  providers: [CreateUserCommandHandler, UserCreatedEventHandler],
  imports: [forwardRef(() => UserModule)],
})
export class UserCreateModule {}
