import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { ResizeImageCommand } from './resize-image.command';

@CommandHandler(ResizeImageCommand)
export class ResizeImageCommandHandler
  implements ICommandHandler<ResizeImageCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: ResizeImageCommand) {
    return command;
  }
}
