import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy, 'auth-jwt') {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.publicKey'),
      algorithms: ['RS256'],
    } as StrategyOptions);
  }

  validate(payload: any) {
    const { id, name } = payload;
    return { id, name };
  }
}
