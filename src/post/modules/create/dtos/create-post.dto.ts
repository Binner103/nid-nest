import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PostStatus } from 'src/post/entities/post.entity';

export class CreatePostDto {
  @IsString({ message: '内容标题格式不对' })
  @IsNotEmpty({ message: '必须提供标题内容' })
  title: string;

  @IsString({ message: '内容正文格式不对' })
  @IsOptional()
  content: string;

  @IsEnum(PostStatus, { message: '无效的内容状态' })
  status: PostStatus;
}
