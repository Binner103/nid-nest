import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { SendMessageCommand } from './send-message.command';

@CommandHandler(SendMessageCommand)
export class SendMessageCommandHandler
  implements ICommandHandler<SendMessageCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: SendMessageCommand) {
    console.log(command.params.message);
    return command;
  }
}
