import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthLocalGuard } from '../modules/local/guards/auth-local.guard';

@Controller()
export class AuthController {
  @Post('login')
  @UseGuards(AuthLocalGuard)
  login() {
    return 'login';
  }
}
