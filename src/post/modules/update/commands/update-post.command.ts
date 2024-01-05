import { UpdatePostDto } from '../dtos/update-post.dto/update-post.dto';

export interface UpdatePostCommandParams extends UpdatePostDto {
  id: number;
}

export class UpdatePostCommand {
  constructor(public readonly params: UpdatePostCommandParams) {}
}
