import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import appUploadConfig from './configs/app-upload.config';

export interface AppUploadModuleOptions {
  destination: string;
}

@Module({})
export class AppUploadModule {
  static register(options: AppUploadModuleOptions): DynamicModule {
    const { destination } = options;
    return {
      module: AppUploadModule,
      imports: [
        ConfigModule.forFeature(appUploadConfig),
        MulterModule.registerAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            dest: configService.get(destination),
          }),
        }),
      ],
      exports: [MulterModule],
    };
  }
}
