import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CreateHotelAppDto } from './create-hotel-app.dto';
import { Bintang, Status } from './hotel.enum';

export class UpdateHotelAppDto extends PartialType(CreateHotelAppDto) {
  @IsNotEmpty()
  @IsString()
  hotelName: string;

  @IsNotEmpty()
  @IsString()
  contactNumber: string;

  @IsNotEmpty()
  @IsString()
  alamat: string;

  @IsNotEmpty()
  @IsEnum(Bintang)
  bintang: Bintang;

  @IsNotEmpty()
  @IsEnum(Status)
  statusHotel: Status;

  @IsNotEmpty()
  @IsString()
  description: string;
}
