import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { UpdatePostCommand } from './update-post.command';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/post/entities/post.entity';
import { Repository } from 'typeorm';

@CommandHandler(UpdatePostCommand)
export class UpdatePostCommandHandler
  implements ICommandHandler<UpdatePostCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async execute(command: UpdatePostCommand) {
    const { id } = command.params;
    return this.postRepository.update(id, command.params);
  }
}
