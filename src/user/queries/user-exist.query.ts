export interface UserExistQueryParams {
  name: string;
}

export class UserExistQuery {
  constructor(public readonly params: UserExistQueryParams) {}
}
