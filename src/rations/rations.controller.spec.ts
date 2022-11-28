/*eslint-disable*/
import { Test, TestingModule } from '@nestjs/testing';
import { RationsController } from './rations.controller';

describe('RationsController', () => {
  let controller: RationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RationsController],
    }).compile();

    controller = module.get<RationsController>(RationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
