import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { UpdateUserCommand } from './update-user.command';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: UpdateUserCommand) {
    console.log(command.params);
    return command;
  }
}
