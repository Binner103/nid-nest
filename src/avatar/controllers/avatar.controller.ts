import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AuthJwtGuard } from 'src/auth/modules/jwt/guards/auth-jwt.guard';
import { UserEntity } from 'src/user/entities/user.entity';
import { AvatarInterceptor } from '../interceptors/avatar.interceptor';
import { CreateAvatarCommand } from '../modules/create/commands/create-avatar.command';

@Controller()
export class AvatarController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('avatar')
  @UseGuards(AuthJwtGuard)
  @UseInterceptors(AvatarInterceptor)
  createAvatar(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: UserEntity,
  ) {
    const { mimetype, filename, size } = file;

    return this.commandBus.execute(
      new CreateAvatarCommand({
        mimetype,
        filename,
        size,
        userId: user.id,
      }),
    );
  }
}
