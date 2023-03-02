import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';

@Module({
  controllers: [AuthController],
  imports: [PassportModule],
})
export class AuthModule {}
