import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import appUploadConfig from './configs/app-upload.config';

@Module({
  imports: [
    ConfigModule.forFeature(appUploadConfig),
    MulterModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dest: configService.get('upload.dest'),
      }),
    }),
  ],
  exports: [MulterModule],
})
export class AppUploadModule {}
