export interface SendMessageCommandParams {
  message: string;
}

export class SendMessageCommand {
  constructor(public readonly params: SendMessageCommandParams) {}
}
