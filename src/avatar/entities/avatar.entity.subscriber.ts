import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { AvatarEntity } from './avatar.entity';

@EventSubscriber()
export class AvatarEntitySubscriber
  implements EntitySubscriberInterface<AvatarEntity>
{
  constructor(connection: Connection,) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return AvatarEntity;
  }

  async beforeInsert(event: InsertEvent<AvatarEntity>) {
    // 
  }
}
