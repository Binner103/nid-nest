import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Response } from 'express';
import { AvatarServeService } from '../providers/avatar-serve.service';
import { GetUserAvatarQuery } from '../queries/get-user-avatar.query';

@Controller()
export class AvatarServeController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly avatarServeService: AvatarServeService,
  ) {}

  @Get('users/:userId/avatar')
  async serveAvatar(
    @Param('userId', ParseIntPipe) userId: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    const avatar = await this.queryBus.execute(
      new GetUserAvatarQuery({ userId }),
    );

    const avatarStream = this.avatarServeService.getUserAvatarStream(
      avatar.filename,
    );

    response.set({
      'Content-Type': avatar.mimetype,
    });

    return new StreamableFile(avatarStream);
  }
}
