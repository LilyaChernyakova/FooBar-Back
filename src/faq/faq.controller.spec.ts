import { Test, TestingModule } from '@nestjs/testing';
import { FAQController } from './faq.controller';

describe('FaqController', () => {
  let controller: FAQController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FAQController],
    }).compile();

    controller = module.get<FAQController>(FAQController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
