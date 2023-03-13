import { AvatarEntity } from 'src/avatar/entities/avatar.entity';

export type AvatarCreatedEventParams = AvatarEntity;

export class AvatarCreatedEvent {
  constructor(public readonly params: AvatarCreatedEventParams) {}
}
