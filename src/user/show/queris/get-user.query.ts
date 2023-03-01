export interface GetUserQueryParams {
  id: number;
}

export class GetUserQuery {
  constructor(public readonly params: GetUserQueryParams) {}
}
