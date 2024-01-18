import { InferSubjects, PureAbility } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';

export enum Action {
  manage = 'manage',
  create = 'create',
  read = 'read',
  update = 'update',
  delete = 'delete',
}

// 主题类型
export type Subjects = InferSubjects<
  typeof PostEntity | typeof UserEntity | 'all'
>;

// 能力
export type AppAbility = PureAbility<[Action, Subjects]>;

@Injectable()
export class AppAbilityFactory {}
