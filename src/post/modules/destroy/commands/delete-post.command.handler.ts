import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { DeletePostCommand } from './delete-post.command';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/post/entities/post.entity';
import { Repository } from 'typeorm';

@CommandHandler(DeletePostCommand)
export class DeletePostCommandHandler
  implements ICommandHandler<DeletePostCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async execute(command: DeletePostCommand) {
    const { id } = command.params;
    return this.postRepository.delete(id);
  }
}
