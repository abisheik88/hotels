import { Injectable } from '@nestjs/common';
import { CreateHotelInput } from './dto/create-hotel.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';
// import { UpdateHotelInput } from './dto/update-hotel.input';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotel: Repository<Hotel>,
  ) {}
  async create(createHotelInput: CreateHotelInput) {
    return await this.hotel.save(createHotelInput);
  }

  async findAll() {
    return await this.hotel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  // update(id: number, updateHotelInput: UpdateHotelInput) {
  //   return `This action updates a #${id} hotel`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} hotel`;
  // }
}
