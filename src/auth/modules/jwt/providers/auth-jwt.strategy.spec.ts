import { Test, TestingModule } from '@nestjs/testing';
import { AuthJwtStrategy } from './auth-jwt.strategy';

describe('AuthJwtStrategy', () => {
  let provider: AuthJwtStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthJwtStrategy],
    }).compile();

    provider = module.get<AuthJwtStrategy>(AuthJwtStrategy);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
