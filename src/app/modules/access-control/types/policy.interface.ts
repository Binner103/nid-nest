import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Action } from '../providers/app-ability.factory';

export interface Policy {
  subject: typeof UserEntity | typeof PostEntity;
  action: Action;
  useInstance?: boolean;
  subjectIdParam?: string;
}
