import { Test, TestingModule } from '@nestjs/testing';
import { UserShowController } from './user-show.controller';

describe('UserShowController', () => {
  let controller: UserShowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserShowController],
    }).compile();

    controller = module.get<UserShowController>(UserShowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
