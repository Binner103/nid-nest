import { Action } from 'src/app/modules/access-control/providers/app-ability.factory';
import { Policy } from 'src/app/modules/access-control/types/policy.interface';
import { PostEntity } from 'src/post/entities/post.entity';

export default [
  {
    subject: PostEntity,
    action: Action.delete,
    useInstance: true,
    subjectIdParam: 'postId',
  },
] as Array<Policy>;
