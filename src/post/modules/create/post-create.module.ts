import { Module, forwardRef } from '@nestjs/common';
import { PostModule } from 'src/post/post.module';
import { PostCreateController } from './controllers/post-create.controller';

@Module({
  imports: [forwardRef(() => PostModule)],
  controllers: [PostCreateController],
})
export class PostCreateModule {}
