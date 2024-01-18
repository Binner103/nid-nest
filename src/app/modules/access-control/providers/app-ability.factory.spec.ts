import { Test, TestingModule } from '@nestjs/testing';
import { AppAbilityFactory } from './app-ability.factory';

describe('AppAbilityFactory', () => {
  let provider: AppAbilityFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppAbilityFactory],
    }).compile();

    provider = module.get<AppAbilityFactory>(AppAbilityFactory);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
