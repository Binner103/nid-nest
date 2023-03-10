import { BadRequestException } from '@nestjs/common';
import { Request, Express } from 'express';
import { FileFilterCallback } from 'multer';

export const createFileFilter = (fileTypes: Array<string>) => {
  return (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback,
  ) => {
    const allowed = fileTypes.some((type) => type === file.mimetype);
    if (allowed) {
      callback(null, true);
    } else {
      callback(new BadRequestException('不能上传此类型文件'));
    }
  };
};

/**
 * 图像文件过滤
 */
export const imageFileFilter = createFileFilter([
  'image/png',
  'image/jpg',
  'image/jpeg',
]);
