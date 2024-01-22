import { Test, TestingModule } from '@nestjs/testing';
import { FileServeController } from './file-serve.controller';

describe('FileServeController', () => {
  let controller: FileServeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileServeController],
    }).compile();

    controller = module.get<FileServeController>(FileServeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
