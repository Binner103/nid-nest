import { FitEnum } from 'sharp';

export interface ResizeImageSize {
  suffix: string;
  width?: number;
  height?: number;
  fit?: keyof FitEnum;
}

export interface ResizeImageCommandParams {
  distination?: string;
  filepath: string;
  filename: string;
  sizes: Array<ResizeImageSize>;
}

export class ResizeImageCommand {
  constructor(public readonly params: ResizeImageCommandParams) {}
}
