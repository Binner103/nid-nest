import { Module } from '@nestjs/common';
import { PostCreateModule } from './modules/create/post-create.module';
import { PostUpdateModule } from './modules/update/post-update.module';
import { PostDestroyModule } from './modules/destroy/post-destroy.module';
import { PostEntitySubscriber } from './entities/post.entity.subscriber';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';

@Module({
  imports: [
    PostCreateModule,
    PostUpdateModule,
    PostDestroyModule,
    TypeOrmModule.forFeature([PostEntity]),
  ],
  exports: [TypeOrmModule],
  providers: [PostEntitySubscriber],
})
export class PostModule {}
