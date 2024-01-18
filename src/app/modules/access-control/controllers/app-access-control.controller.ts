import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppAbilityFactory } from '../providers/app-ability.factory';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { CheckUserAccessDto } from '../dtos/check-user-access.dto';
import { PostEntity } from 'src/post/entities/post.entity';

@Controller()
export class AppAccessControlController {
  constructor(private readonly appAbilityFactory: AppAbilityFactory) {}

  @Post('check-user-access')
  @UseGuards(AuthJwtGuard)
  checkUserAccess(
    @CurrentUser() user: UserEntity,
    @Body() body: CheckUserAccessDto,
  ) {
    const userAbility = this.appAbilityFactory.createAbilityForUser(user);

    let resource: any;

    switch (body.resourceType) {
      case 'PostEntity':
        resource = new PostEntity();
        break;
    }

    resource.id = body.resourceId;
    resource.status = body.resourceStatus;
    resource.userId = body.resourceUserId;

    return {
      name: `${user.name}(id:${user.id})`,
      result: userAbility.can(body.action, resource),
    };
  }
}
