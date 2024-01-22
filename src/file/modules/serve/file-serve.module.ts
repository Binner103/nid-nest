import { Module, forwardRef } from '@nestjs/common';
import { FileServeController } from './controllers/file-serve.controller';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [forwardRef(() => FileModule)],
  controllers: [FileServeController],
})
export class FileServeModule {}
