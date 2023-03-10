import { forwardRef, Module } from '@nestjs/common';
import { AvatarModule } from 'src/avatar/avatar.module';
import { AvatarServeController } from './controllers/avatar-serve.controller';
import { AvatarServeService } from './providers/avatar-serve.service';

@Module({
  controllers: [AvatarServeController],
  providers: [AvatarServeService],
  imports: [forwardRef(() => AvatarModule)],
})
export class AvatarServeModule {}
