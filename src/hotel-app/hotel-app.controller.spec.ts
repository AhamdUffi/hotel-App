import { Test, TestingModule } from '@nestjs/testing';
import { HotelAppController } from './hotel-app.controller';
import { HotelAppService } from './hotel-app.service';

describe('HotelAppController', () => {
  let controller: HotelAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelAppController],
      providers: [HotelAppService],
    }).compile();

    controller = module.get<HotelAppController>(HotelAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
