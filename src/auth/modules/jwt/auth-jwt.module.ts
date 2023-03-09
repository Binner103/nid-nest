import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        privateKey: configService.get('jwt.privateKey'),
        signOptions: {
          algorithm: 'RS256',
        },
      }),
    }),
  ],
  exports: [JwtModule],
})
export class AuthJwtModule {}
