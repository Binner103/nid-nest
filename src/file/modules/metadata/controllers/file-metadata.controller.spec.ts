import { Test, TestingModule } from '@nestjs/testing';
import { FileMetadataController } from './file-metadata.controller';

describe('FileMetadataController', () => {
  let controller: FileMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileMetadataController],
    }).compile();

    controller = module.get<FileMetadataController>(FileMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
