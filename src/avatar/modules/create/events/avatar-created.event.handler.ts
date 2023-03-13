import fs from 'fs';
import path from 'path';
import { CommandBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AvatarCreatedEvent } from './avatar-created.event';
import { ConfigService } from '@nestjs/config';
import { ResizeImageCommand } from 'src/app/modules/image/commands/resize-image.command';

@EventsHandler(AvatarCreatedEvent)
export class AvatarCreatedEventHandler
  implements IEventHandler<AvatarCreatedEvent>
{
  constructor(
    private readonly configService: ConfigService,
    private readonly commandBus: CommandBus,
  ) {}

  handle(event: AvatarCreatedEvent) {
    const { filename } = event.params;

    const avatarPath = path.join(
      this.configService.get('upload.avatar'),
      filename,
    );

    if (!fs.existsSync(avatarPath)) return;

    // 调整大小后头像存储位置
    const avatarResizedPath = this.configService.get('upload.avatarResized');

    return this.commandBus.execute(
      new ResizeImageCommand({
        filename,
        filepath: avatarPath,
        destination: avatarResizedPath,
        sizes: [
          {
            suffix: 'large',
            width: 256,
            height: 256,
            fit: 'cover',
          },
          {
            suffix: 'medium',
            width: 128,
            height: 128,
            fit: 'cover',
          },
          {
            suffix: 'small',
            width: 64,
            height: 64,
            fit: 'cover',
          },
        ],
      }),
    );
  }
}
