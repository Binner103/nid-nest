import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreatedEvent } from '../events/user-created.event';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(command: CreateUserCommand) {
    const user = await this.userRepository.save(command.params);
    this.eventBus.publish(new UserCreatedEvent(user));
    return {
      insertId: user.id,
    };
  }
}
