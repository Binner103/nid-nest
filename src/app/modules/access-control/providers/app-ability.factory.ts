import {
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
  Ability,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PostEntity, PostStatus } from 'src/post/entities/post.entity';
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
export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AppAbilityFactory {
  constructor(private readonly configService: ConfigService) {}

  createAbilityForUser(user: UserEntity) {
    const { can, build } = new AbilityBuilder<AppAbility>(
      Ability as AbilityClass<AppAbility>,
    );

    // 获取配置中管理员的id
    const rootUserId = this.configService.get('accessControl.rootUserId');

    // 管理员可以管理所有资源
    if (user.id === rootUserId) {
      can(Action.manage, 'all');
    }

    // 用户可以阅读状态是公开的内容
    can(Action.read, PostEntity, { status: PostStatus.published });

    // 内容作者可以管理自己发布的内容
    can(Action.manage, PostEntity, { userId: user.id });

    return build({
      detectSubjectType: (subject) =>
        subject.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
