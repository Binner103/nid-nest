import { Body, Controller, Patch, UseGuards } from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../commands/update-user.command';

@Controller()
export class UserUpdateController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch('users/:userId')
  @UseGuards(AuthJwtGuard)
  updateUser(@Body() body: UpdateUserDto, @CurrentUser() user: UserEntity) {
    return this.commandBus.execute(
      new UpdateUserCommand({ ...body, userId: user.id }),
    );
  }
}
