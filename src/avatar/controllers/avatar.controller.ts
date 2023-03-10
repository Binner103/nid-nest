import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AvatarInterceptor } from '../interceptors/avatar.interceptor';

@Controller()
export class AvatarController {
  @Post('avatar')
  @UseInterceptors(AvatarInterceptor)
  createAvatar(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
