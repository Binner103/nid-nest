import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/user-created.event';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateUserCommand) {
    const { name, password } = command.params;
    this.eventBus.publish(new UserCreatedEvent({ name, password }));
    return `create user: ${name} / ${password}`;
  }
}
