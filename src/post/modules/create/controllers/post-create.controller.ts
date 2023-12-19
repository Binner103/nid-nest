import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';
import { CreatePostDto } from '../dtos/create-post.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreatePostCommand } from '../commands/create-post.command';

@Controller('')
export class PostCreateController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('posts')
  @UseGuards(AuthJwtGuard)
  createPost(@Body() body: CreatePostDto, @CurrentUser() user: UserEntity) {
    return this.commandBus.execute(
      new CreatePostCommand({
        ...body,
        userId: user.id,
      }),
    );
  }
}
