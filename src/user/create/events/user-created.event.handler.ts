import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from './user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler
  implements IEventHandler<UserCreatedEvent>
{
  handle(event: UserCreatedEvent) {
    const { name, password } = event.params;
    console.log(`Create user: ${name} / pass: ${password}`);
  }
}
