import { Test, TestingModule } from '@nestjs/testing';
import { PostUpdateController } from './post-update.controller';

describe('PostUpdateController', () => {
  let controller: PostUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostUpdateController],
    }).compile();

    controller = module.get<PostUpdateController>(PostUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
