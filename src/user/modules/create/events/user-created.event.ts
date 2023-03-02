export interface UserCreatedEventParams {
  name: string;
  password: string;
}

export class UserCreatedEvent {
  constructor(public readonly params: UserCreatedEventParams) {}
}
