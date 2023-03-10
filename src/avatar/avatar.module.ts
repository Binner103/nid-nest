import { Module } from '@nestjs/common';
import { AppUploadModule } from 'src/app/modules/upload/app-upload.module';
import { AvatarController } from './controllers/avatar.controller';

@Module({
  controllers: [AvatarController],
  imports: [AppUploadModule.register({ destination: 'upload.avatar' })],
})
export class AvatarModule {}
