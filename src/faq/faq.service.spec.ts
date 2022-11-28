/*eslint-disable*/
import { Test, TestingModule } from '@nestjs/testing';
import { FAQService } from './faq.service';

describe('FaqService', () => {
  let service: FAQService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FAQService],
    }).compile();

    service = module.get<FAQService>(FAQService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
