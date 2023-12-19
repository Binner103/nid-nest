import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';
import { CreatePostDto } from '../dtos/create-post.dto';

@Controller('')
export class PostCreateController {
  @Post('posts')
  @UseGuards(AuthJwtGuard)
  createPost(@Body() body: CreatePostDto) {
    return 'create post';
  }
}
