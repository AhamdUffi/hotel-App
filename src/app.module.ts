import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelApp } from './hotel-app/entities/hotel-app.entity';
import { HotelAppModule } from './hotel-app/hotel-app.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HotelAppModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 2121,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      database: 'hotelapp',
      dropSchema: true,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
