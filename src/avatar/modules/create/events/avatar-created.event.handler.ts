import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AvatarCreatedEvent } from './avatar-created.event';

@EventsHandler(AvatarCreatedEvent)
export class AvatarCreatedEventHandler
  implements IEventHandler<AvatarCreatedEvent>
{
  handle(event: AvatarCreatedEvent) {
    return event;
  }
}

