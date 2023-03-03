import { Controller, Post, UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { CurrentUser } from '../decorators/current-user.decorator';
import { AuthLocalGuard } from '../modules/local/guards/auth-local.guard';

@Controller()
export class AuthController {
  @Post('login')
  @UseGuards(AuthLocalGuard)
  login(@CurrentUser() user: UserEntity) {
    return user;
  }
}
