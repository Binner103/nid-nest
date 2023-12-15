import { Module } from '@nestjs/common';
import { UserUpdateController } from './controllers/user-update.controller';
import { UpdateUserCommandHandler } from './commands/update-user.command.handler';

@Module({
  controllers: [UserUpdateController],
  providers: [UpdateUserCommandHandler]
})
export class UserUpdateModule {}
