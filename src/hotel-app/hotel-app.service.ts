import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { uuid } from 'uuidv4';
import { Repository } from 'typeorm';
import { CreateHotelAppDto } from './dto/create-hotel-app.dto';
import { UpdateHotelAppDto } from './dto/update-hotel-app.dto';
import { HotelApp } from './entities/hotel-app.entity';
import { Bintang } from './dto/hotel.enum';

@Injectable()
export class HotelAppService {
  constructor(
    @InjectRepository(HotelApp) private hotelRepository: Repository<HotelApp>,
  ) {}

  async create(createHotelAppDto: CreateHotelAppDto) {
    const {
      hotelName,
      contactNumber,
      alamat,
      bintang,
      statusHotel,
      description,
    } = createHotelAppDto;

    let newHotel = this.hotelRepository.create({
      id: uuid(),
      ...createHotelAppDto,
    });
    await this.hotelRepository.save(newHotel);

    return newHotel;
  }

  async findAll() {
    return await this.hotelRepository.find();
  }

  async findOne(id: string) {
    let findId = await this.hotelRepository.findOneBy({ id });

    if (!id) {
      throw new NotFoundException(
        `ID ${id} not foud you have to make sure your ID`,
      );
    }
    return findId;
  }

  async update(id: string, updateHotelAppDto: UpdateHotelAppDto) {
    let updateHotel = {
      ...updateHotelAppDto,
    };

    this.hotelRepository.update({ id }, updateHotel);
    return await updateHotel;
  }

  async remove(id: string) {
    this.findOne(id);
    let removeHotel = await this.hotelRepository.delete(id);
    return;
  }
}
