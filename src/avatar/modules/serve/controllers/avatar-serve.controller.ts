import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
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
    @Query('size') size: string,
  ) {
    if (!size) {
      throw new BadRequestException('请选择头像尺寸');
    }

    const isValidSize = ['large', 'medium', 'small'].some(
      (item) => item == size,
    );

    if (!isValidSize) {
      throw new BadRequestException('无效头像尺寸');
    }

    const avatar = await this.queryBus.execute(
      new GetUserAvatarQuery({ userId }),
    );

    const avatarStream = this.avatarServeService.getUserAvatarStream(
      avatar.filename,
      size,
    );

    response.set({
      'Content-Type': avatar.mimetype,
    });

    return new StreamableFile(avatarStream);
  }
}
