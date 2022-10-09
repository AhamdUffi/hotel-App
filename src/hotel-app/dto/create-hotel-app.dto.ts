import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Bintang, Status } from './hotel.enum';

export class CreateHotelAppDto {
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
