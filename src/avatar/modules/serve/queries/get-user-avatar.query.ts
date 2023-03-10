export interface GetUserAvatarQueryParams {
  userId: number;
}

export class GetUserAvatarQuery {
  constructor(public readonly params: GetUserAvatarQueryParams) {}
}
