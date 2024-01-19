import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UpdatePostDto } from '../dtos/update-post.dto/update-post.dto';
import { UpdatePostCommand } from '../commands/update-post.command';
import { UsePolicies } from 'src/app/modules/access-control/decorators/use-policies.decorator';
import updatePostPolicy from '../policies/update-post.policy';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';
import { PolicyGuard } from 'src/app/modules/access-control/guards/policy.guard';

@Controller()
export class PostUpdateController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch('posts/:postId')
  @UsePolicies(...updatePostPolicy)
  @UseGuards(AuthJwtGuard, PolicyGuard)
  updatePost(
    @Body() body: UpdatePostDto,
    @Param('postId', ParseIntPipe) postId: number,
  ) {
    return this.commandBus.execute(
      new UpdatePostCommand({
        ...body,
        id: postId,
      }),
    );
  }
}
