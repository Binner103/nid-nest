import { Module, forwardRef } from '@nestjs/common';
import { FileCreateController } from './controllers/file-create.controller';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [forwardRef(() => FileModule)],
  controllers: [FileCreateController],
})
export class FileCreateModule {}
