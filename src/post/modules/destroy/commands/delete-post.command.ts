export interface DeletePostCommandParams {
  id: number;
}

export class DeletePostCommand {
  constructor(public readonly params: DeletePostCommandParams) {}
}
