import { Test, TestingModule } from '@nestjs/testing';
import { PsteamController } from './psteam.controller';
import { PsteamService } from './psteam.service';

describe('PsteamController', () => {
  let controller: PsteamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PsteamController],
      providers: [PsteamService],
    }).compile();

    controller = module.get<PsteamController>(PsteamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
