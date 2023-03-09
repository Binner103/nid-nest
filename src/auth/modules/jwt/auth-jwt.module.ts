import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { CreateJwtCommandHandler } from './commands/create-jwt.command.handler';
import { AuthJwtStrategy } from './providers/auth-jwt.strategy';

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
  providers: [CreateJwtCommandHandler, AuthJwtStrategy],
})
export class AuthJwtModule {}
