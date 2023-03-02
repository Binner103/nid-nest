import { Test, TestingModule } from '@nestjs/testing';
import { AuthLocalStrategy } from './auth-local.strategy';

describe('AuthLocalStrategy', () => {
  let provider: AuthLocalStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthLocalStrategy],
    }).compile();

    provider = module.get<AuthLocalStrategy>(AuthLocalStrategy);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
