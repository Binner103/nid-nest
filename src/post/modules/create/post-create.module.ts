import { Module, forwardRef } from '@nestjs/common';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [forwardRef(() => PostModule)],
})
export class PostCreateModule {}
