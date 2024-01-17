import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { DeletePostCommand } from '../commands/delete-post.command';

@Controller()
export class PostDestroyController {
  constructor(private readonly commandBus: CommandBus) {}

  @Delete('posts/:postId')
  deletePost(@Param('postId', ParseIntPipe) postId: number) {
    return this.commandBus.execute(new DeletePostCommand({ id: postId }));
  }
}
