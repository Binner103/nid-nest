import { forwardRef, Module } from '@nestjs/common';
import { AvatarModule } from 'src/avatar/avatar.module';
import { CreateAvatarCommandHandler } from './commands/create-avatar.command.handler';

@Module({
  providers: [CreateAvatarCommandHandler],
  imports: [forwardRef(() => AvatarModule)],
})
export class AvatarCreateModule {}
