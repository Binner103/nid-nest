import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';

@Controller('')
export class PostCreateController {
  @Post('posts')
  @UseGuards(AuthJwtGuard)
  createPost() {
    return 'create post';
  }
}
