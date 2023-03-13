import { Module } from '@nestjs/common';
import { ResizeImageCommandHandler } from './commands/resize-image.command.handler';

@Module({
  providers: [ResizeImageCommandHandler]
})
export class AppImageModule {}
