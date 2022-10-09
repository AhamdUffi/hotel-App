import { Module } from '@nestjs/common';
import { HotelAppService } from './hotel-app.service';
import { HotelAppController } from './hotel-app.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { HotelApp } from './entities/hotel-app.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([HotelApp]), AuthModule],
  controllers: [HotelAppController],
  providers: [HotelAppService],
})
export class HotelAppModule {}
