import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { PostEntity } from './post.entity';

@EventSubscriber()
export class PostEntitySubscriber
  implements EntitySubscriberInterface<PostEntity>
{
  constructor(connection: Connection,) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return PostEntity;
  }

  async beforeInsert(event: InsertEvent<PostEntity>) {
    // 
  }
}
