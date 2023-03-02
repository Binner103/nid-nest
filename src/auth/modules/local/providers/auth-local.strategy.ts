import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(
  Strategy,
  'auth-local',
) {
  constructor() {
    super({ usernameField: 'name' });
  }

  validate(name: string, password: string) {
    return { name };
  }
}
