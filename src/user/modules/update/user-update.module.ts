import { Module, forwardRef } from '@nestjs/common';
import { UserUpdateController } from './controllers/user-update.controller';
import { UpdateUserCommandHandler } from './commands/update-user.command.handler';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [UserUpdateController],
  providers: [UpdateUserCommandHandler],
  imports: [forwardRef(() => UserModule)],
})
export class UserUpdateModule {}
