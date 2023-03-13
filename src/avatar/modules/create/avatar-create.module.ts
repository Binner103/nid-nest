import { forwardRef, Module } from '@nestjs/common';
import { AvatarModule } from 'src/avatar/avatar.module';
import { CreateAvatarCommandHandler } from './commands/create-avatar.command.handler';
import { AvatarCreatedEventHandler } from './events/avatar-created.event.handler';

@Module({
  providers: [CreateAvatarCommandHandler, AvatarCreatedEventHandler],
  imports: [forwardRef(() => AvatarModule)],
})
export class AvatarCreateModule {}
