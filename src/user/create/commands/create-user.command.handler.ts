import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateUserCommand) {
    const { name, password } = command.params;
    return `create user: ${name} / ${password}`;
  }
}
