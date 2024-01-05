import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from 'src/post/modules/create/dtos/create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}
