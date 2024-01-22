import { Test, TestingModule } from '@nestjs/testing';
import { FileCreateController } from './file-create.controller';

describe('FileCreateController', () => {
  let controller: FileCreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileCreateController],
    }).compile();

    controller = module.get<FileCreateController>(FileCreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
