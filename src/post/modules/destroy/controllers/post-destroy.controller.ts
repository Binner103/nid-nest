import {
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { DeletePostCommand } from '../commands/delete-post.command';
import { UsePolicies } from 'src/app/modules/access-control/decorators/use-policies.decorator';
import deletePostPolicy from '../../update/policies/update-post.policy';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';
import { PolicyGuard } from 'src/app/modules/access-control/guards/policy.guard';

@Controller()
export class PostDestroyController {
  constructor(private readonly commandBus: CommandBus) {}

  @Delete('posts/:postId')
  @UsePolicies(...deletePostPolicy)
  @UseGuards(AuthJwtGuard, PolicyGuard)
  deletePost(@Param('postId', ParseIntPipe) postId: number) {
    return this.commandBus.execute(new DeletePostCommand({ id: postId }));
  }
}
