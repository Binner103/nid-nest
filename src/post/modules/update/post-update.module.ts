import { Module, forwardRef } from '@nestjs/common';
import { PostModule } from 'src/post/post.module';
import { PostUpdateController } from './controllers/post-update.controller';
import { UpdatePostCommandHandler } from './commands/update-post.command.handler';

@Module({
  imports: [forwardRef(() => PostModule)],
  controllers: [PostUpdateController],
  providers: [UpdatePostCommandHandler],
})
export class PostUpdateModule {}
