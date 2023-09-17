import { Test, TestingModule } from '@nestjs/testing';
import { PsController } from './ps.controller';
import { PsService } from './ps.service';

describe('PsController', () => {
  let controller: PsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PsController],
      providers: [PsService],
    }).compile();

    controller = module.get<PsController>(PsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
