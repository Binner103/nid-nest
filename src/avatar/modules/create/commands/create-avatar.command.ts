export interface CreateAvatarCommandParams {
  mimetype: string;
  filename: string;
  size: number;
  userId: number;
}

export class CreateAvatarCommand {
  constructor(public readonly params: CreateAvatarCommandParams) {}
}
