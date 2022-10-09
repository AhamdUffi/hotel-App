import { Test, TestingModule } from '@nestjs/testing';
import { HotelAppService } from './hotel-app.service';

describe('HotelAppService', () => {
  let service: HotelAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelAppService],
    }).compile();

    service = module.get<HotelAppService>(HotelAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
