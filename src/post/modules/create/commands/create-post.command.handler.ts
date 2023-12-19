import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreatePostCommand } from './create-post.command';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/post/entities/post.entity';
import { Repository } from 'typeorm';

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler
  implements ICommandHandler<CreatePostCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async execute(command: CreatePostCommand) {
    const post = await this.postRepository.save(command.params);
    return {
      insertId: post.id,
    };
  }
}
