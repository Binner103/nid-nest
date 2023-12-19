import { Module, forwardRef } from '@nestjs/common';
import { PostModule } from 'src/post/post.module';
import { PostCreateController } from './controllers/post-create.controller';
import { CreatePostCommandHandler } from './commands/create-post.command.handler';

@Module({
  imports: [forwardRef(() => PostModule)],
  controllers: [PostCreateController],
  providers: [CreatePostCommandHandler],
})
export class PostCreateModule {}
