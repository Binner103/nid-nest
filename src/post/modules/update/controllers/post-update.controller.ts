import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UpdatePostDto } from '../dtos/update-post.dto/update-post.dto';
import { UpdatePostCommand } from '../commands/update-post.command';
import { UsePolicies } from 'src/app/modules/access-control/decorators/use-policies.decorator';
import updatePostPolicy from '../policies/update-post.policy';

@Controller()
export class PostUpdateController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch('posts/:postId')
  @UsePolicies(...updatePostPolicy)
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
