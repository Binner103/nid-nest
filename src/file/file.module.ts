import { Module } from '@nestjs/common';
import { FileCreateModule } from './modules/create/file-create.module';
import { FileServeModule } from './modules/serve/file-serve.module';
import { FileMetadataModule } from './modules/metadata/file-metadata.module';
import { FileEntitySubscriber } from './entities/file.entity.subscriber';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';

@Module({
  imports: [
    FileCreateModule,
    FileServeModule,
    FileMetadataModule,
    TypeOrmModule.forFeature([FileEntity]),
  ],
  exports: [TypeOrmModule],
  providers: [FileEntitySubscriber],
})
export class FileModule {}
