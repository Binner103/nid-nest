import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUploadModule } from 'src/app/modules/upload/app-upload.module';
import { AvatarController } from './controllers/avatar.controller';
import { AvatarEntity } from './entities/avatar.entity';
import { AvatarEntitySubscriber } from './entities/avatar.entity.subscriber';

@Module({
  controllers: [AvatarController],
  imports: [
    AppUploadModule.register({ destination: 'upload.avatar' }),
    TypeOrmModule.forFeature([AvatarEntity]),
  ],
  exports: [TypeOrmModule],
  providers: [AvatarEntitySubscriber],
})
export class AvatarModule {}
