import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { FileEntity } from './file.entity';

@EventSubscriber()
export class FileEntitySubscriber
  implements EntitySubscriberInterface<FileEntity>
{
  constructor(connection: Connection,) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return FileEntity;
  }

  async beforeInsert(event: InsertEvent<FileEntity>) {
    // 
  }
}
