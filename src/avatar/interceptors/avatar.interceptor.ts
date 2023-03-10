import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from 'src/app/modules/upload/utilities/file-filters';

export const AvatarInterceptor = FileInterceptor('avatar', {
  fileFilter: imageFileFilter,
});
