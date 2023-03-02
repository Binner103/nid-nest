import { Module } from '@nestjs/common';
import { AuthLocalStrategy } from './providers/auth-local.strategy';

@Module({
  providers: [AuthLocalStrategy],
})
export class AuthLocalModule {}
