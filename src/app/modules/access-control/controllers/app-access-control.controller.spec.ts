import { Test, TestingModule } from '@nestjs/testing';
import { AppAccessControlController } from './app-access-control.controller';

describe('AppAccessControlController', () => {
  let controller: AppAccessControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppAccessControlController],
    }).compile();

    controller = module.get<AppAccessControlController>(AppAccessControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
