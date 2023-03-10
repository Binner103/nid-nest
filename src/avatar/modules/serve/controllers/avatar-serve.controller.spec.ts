import { Test, TestingModule } from '@nestjs/testing';
import { AvatarServeController } from './avatar-serve.controller';

describe('AvatarServeController', () => {
  let controller: AvatarServeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvatarServeController],
    }).compile();

    controller = module.get<AvatarServeController>(AvatarServeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
