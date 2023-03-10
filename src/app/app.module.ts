import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { AppService } from './providers/app.service';
import appConfig from './configs/app.config';
import dbConfig from './configs/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppCommonModule } from './modules/common/app-common.module';
import { UserModule } from 'src/user/user.module';
import { AppNotificationModule } from './notification/app-notification.module';
import { AuthModule } from 'src/auth/auth.module';
import { AppUploadModule } from './modules/upload/app-upload.module';
import authConfig from 'src/auth/configs/auth.config';
import { AvatarModule } from 'src/avatar/avatar.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig, authConfig],
    }),

    /**
     * 数据库
     */
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.username'),
        password: configService.get('db.password'),
        database: configService.get('db.database'),
        synchronize: configService.get('typeOrm.synchronize'),
        autoLoadEntities: configService.get('typeOrm.autoLoadEntities'),
      }),
    }),

    AppCommonModule,
    UserModule,
    AppNotificationModule,
    AuthModule,
    AppUploadModule,
    AvatarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
