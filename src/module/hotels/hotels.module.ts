import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsResolver } from './hotels.resolver';
import { Hotel } from './entities/hotel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  providers: [HotelsResolver, HotelsService],
})
export class HotelsModule {}
