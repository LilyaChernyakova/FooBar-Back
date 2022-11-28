import { Test, TestingModule } from '@nestjs/testing';
import { RationsService } from './rations.service';

describe('RationsService', () => {
  let service: RationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RationsService],
    }).compile();

    service = module.get<RationsService>(RationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
