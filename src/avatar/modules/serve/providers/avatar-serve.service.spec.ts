import { Test, TestingModule } from '@nestjs/testing';
import { AvatarServeService } from './avatar-serve.service';

describe('AvatarServeService', () => {
  let service: AvatarServeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvatarServeService],
    }).compile();

    service = module.get<AvatarServeService>(AvatarServeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
