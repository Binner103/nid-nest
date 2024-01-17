import { Test, TestingModule } from '@nestjs/testing';
import { PostDestroyController } from './post-destroy.controller';

describe('PostDestroyController', () => {
  let controller: PostDestroyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostDestroyController],
    }).compile();

    controller = module.get<PostDestroyController>(PostDestroyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
