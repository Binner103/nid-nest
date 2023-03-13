import fs from 'fs';
import path from 'path';
import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { ResizeImageCommand, ResizeImageSize } from './resize-image.command';
import sharp from 'sharp';

@CommandHandler(ResizeImageCommand)
export class ResizeImageCommandHandler
  implements ICommandHandler<ResizeImageCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: ResizeImageCommand) {
    // 准备数据
    const { filename, filepath, sizes, destination } = command.params;

    // 创建目录
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    // 读取文件
    const image = sharp(filepath);
    const metadata = await image.metadata();

    // 缩放图像
    const resize = (size: ResizeImageSize) => {
      if (metadata.width < size.width || metadata.height < size.height) {
        return;
      }

      const resizedImagePath = path.join(
        destination,
        `${filename}-${size.suffix}`,
      );

      return image
        .resize(size.width, size.height, { fit: size.fit })
        .toFile(resizedImagePath);
    };
    return Promise.all(sizes.map(resize));
  }
}
