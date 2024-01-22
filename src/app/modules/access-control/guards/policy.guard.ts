import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AppAbilityFactory } from '../providers/app-ability.factory';
import { Policy } from '../types/policy.interface';
import { USE_POLICIES } from '../decorators/use-policies.decorator';
import { DataSource } from 'typeorm';

@Injectable()
export class PolicyGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly appAbilityFactory: AppAbilityFactory,
    private readonly dataSource: DataSource,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 获取权限策略
    const policies =
      this.reflector.get<Array<Policy>>(USE_POLICIES, context.getHandler()) ||
      [];

    // 解构请求
    const { user, params } = context.switchToHttp().getRequest();

    //用户能力
    const userAbility = this.appAbilityFactory.createAbilityForUser(user);

    const entityManager = this.dataSource.manager;

    const checkPolicy = async (policy: Policy) => {
      let { subject, action, useInstance, subjectIdParam } = policy;

      if (useInstance) {
        const subjectId = params[subjectIdParam];
        subject = (await entityManager.findOne(subject, subjectId)) as any;
      }

      return userAbility.can(action, subject);
    };

    // 执行权限策略检查
    const results = await Promise.all(policies.map(checkPolicy));

    return results.every((result) => result);
  }
}
