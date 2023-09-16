import { Test, TestingModule } from '@nestjs/testing';
import { PsService } from './ps.service';

describe('PsService', () => {
  let service: PsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PsService],
    }).compile();

    service = module.get<PsService>(PsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
