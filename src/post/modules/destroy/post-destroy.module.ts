import { Module, forwardRef } from '@nestjs/common';
import { PostModule } from 'src/post/post.module';
import { PostDestroyController } from './controllers/post-destroy.controller';
import { DeletePostCommandHandler } from './commands/delete-post.command.handler';

@Module({
  imports: [forwardRef(() => PostModule)],
  controllers: [PostDestroyController],
  providers: [DeletePostCommandHandler],
})
export class PostDestroyModule {}
