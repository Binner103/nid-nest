import { Module } from '@nestjs/common';
import { PostCreateModule } from './modules/create/post-create.module';
import { PostUpdateModule } from './modules/update/post-update.module';
import { PostDestroyModule } from './modules/destroy/post-destroy.module';

@Module({
  imports: [PostCreateModule, PostUpdateModule, PostDestroyModule]
})
export class PostModule {}
