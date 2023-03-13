import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { AvatarEntity } from 'src/avatar/entities/avatar.entity';
import { Repository } from 'typeorm';
import { AvatarCreatedEvent } from '../events/avatar-created.event';
import { CreateAvatarCommand } from './create-avatar.command';

@CommandHandler(CreateAvatarCommand)
export class CreateAvatarCommandHandler
  implements ICommandHandler<CreateAvatarCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(AvatarEntity)
    private readonly avatarRepository: Repository<AvatarEntity>,
  ) {}

  async execute(command: CreateAvatarCommand) {
    const avatar = await this.avatarRepository.save(command.params);
    this.eventBus.publish(new AvatarCreatedEvent(avatar));

    return avatar;
  }
}
