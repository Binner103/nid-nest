import { forwardRef, Module } from '@nestjs/common';
import { AvatarModule } from 'src/avatar/avatar.module';
import { AvatarServeController } from './controllers/avatar-serve.controller';
import { AvatarServeService } from './providers/avatar-serve.service';
import { GetUserAvatarQueryHandler } from './queries/get-user-avatar.query.handler';

@Module({
  controllers: [AvatarServeController],
  providers: [AvatarServeService, GetUserAvatarQueryHandler],
  imports: [forwardRef(() => AvatarModule)],
})
export class AvatarServeModule {}
