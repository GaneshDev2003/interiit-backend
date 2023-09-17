import { Test, TestingModule } from '@nestjs/testing';
import { PsteamService } from './psteam.service';

describe('PsteamService', () => {
  let service: PsteamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PsteamService],
    }).compile();

    service = module.get<PsteamService>(PsteamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
