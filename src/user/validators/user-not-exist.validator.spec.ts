import { Test, TestingModule } from '@nestjs/testing';
import { UserNotExistValidator } from './user-not-exist.validator';

describe('UserNotExistValidator', () => {
  let provider: UserNotExistValidator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserNotExistValidator],
    }).compile();

    provider = module.get<UserNotExistValidator>(UserNotExistValidator);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
