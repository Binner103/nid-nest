import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { AuthLocalModule } from './modules/local/auth-local.module';

@Module({
  controllers: [AuthController],
  imports: [PassportModule, AuthLocalModule],
})
export class AuthModule {}
