import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { HotelAppService } from './hotel-app.service';
import { CreateHotelAppDto } from './dto/create-hotel-app.dto';
import { UpdateHotelAppDto } from './dto/update-hotel-app.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('hotnel-app')
@UseGuards(AuthGuard())
export class HotelAppController {
  constructor(private readonly hotelAppService: HotelAppService) {}

  @Post()
  create(@Body() createHotelAppDto: CreateHotelAppDto) {
    return this.hotelAppService.create(createHotelAppDto);
  }

  @Get()
  async findAll() {
    return await this.hotelAppService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hotelAppService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHotelAppDto: UpdateHotelAppDto,
  ) {
    return await this.hotelAppService.update(id, updateHotelAppDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.hotelAppService.remove(id);
  }
}
