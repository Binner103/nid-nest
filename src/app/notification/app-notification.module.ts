import { Module } from '@nestjs/common';
import { SendMessageCommandHandler } from './commands/send-message.command.handler';

@Module({
  providers: [SendMessageCommandHandler],
})
export class AppNotificationModule {}
