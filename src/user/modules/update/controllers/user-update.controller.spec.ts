import { Test, TestingModule } from '@nestjs/testing';
import { UserUpdateController } from './user-update.controller';

describe('UserUpdateController', () => {
  let controller: UserUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserUpdateController],
    }).compile();

    controller = module.get<UserUpdateController>(UserUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
