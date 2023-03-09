export interface CreateJwtCommandParams {
  id: number;
  name: string;
}

export class CreateJwtCommand {
  constructor(public readonly params: CreateJwtCommandParams) {}
}
