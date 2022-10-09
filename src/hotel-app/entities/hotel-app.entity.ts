import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Bintang, Status } from '../dto/hotel.enum';

@Entity()
export class HotelApp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hotelName: string;

  @Column()
  alamat: string;

  @Column()
  Bintang: Bintang;

  @Column()
  statusHotel: Status;

  @Column()
  description: string;
}
