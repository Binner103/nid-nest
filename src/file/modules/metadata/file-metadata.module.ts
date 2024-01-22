import { Module, forwardRef } from '@nestjs/common';
import { FileMetadataController } from './controllers/file-metadata.controller';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [forwardRef(() => FileModule)],
  controllers: [FileMetadataController],
})
export class FileMetadataModule {}
