import { CreatePostDto } from '../dtos/create-post.dto';

export interface CreatePostCommandParams extends CreatePostDto {
  userId: number;
}

export class CreatePostCommand {
  constructor(public readonly params: CreatePostCommandParams) {}
}
