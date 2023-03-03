export interface ValidateUserCredentialCommandParams {
  name: string;
  password: string;
}

export class ValidateUserCredentialCommand {
  constructor(public readonly params: ValidateUserCredentialCommandParams) {}
}
