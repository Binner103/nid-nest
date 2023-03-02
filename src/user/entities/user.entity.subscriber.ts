import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './user.entity';
@EventSubscriber()
export class UserEntitySubscriber
  implements EntitySubscriberInterface<UserEntity>
{
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return UserEntity;
  }

  async beforeInsert(event: InsertEvent<UserEntity>) {
    // 加密用户密码
    event.entity.password = await bcrypt.hash(event.entity.password, 12);
  }
}
