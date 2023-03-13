import fs from 'fs';
import path from 'path';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AvatarServeService {
  constructor(private readonly configService: ConfigService) {}

  getUserAvatarStream(filename: string, size: string): fs.ReadStream {
    const avatarPath = path.join(
      this.configService.get('upload.avatarResized'),
      `${filename}-${size}`,
    );

    const fileExist = fs.existsSync(avatarPath);

    if (!fileExist) {
      throw new NotFoundException('头像文件不存在');
    }

    return fs.createReadStream(avatarPath);
  }
}
