import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { AuthLocalModule } from './modules/local/auth-local.module';
import { AuthJwtModule } from './modules/jwt/auth-jwt.module';

@Module({
  controllers: [AuthController],
  imports: [PassportModule, AuthLocalModule, AuthJwtModule],
})
export class AuthModule {}
