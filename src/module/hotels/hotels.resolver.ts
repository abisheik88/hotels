import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { HotelsService } from './hotels.service';
import { CreateHotelInput } from './dto/create-hotel.input';
import { Hotel } from './entities/hotel.entity';
// import { UpdateHotelInput } from './dto/update-hotel.input';

@Resolver('Hotel')
export class HotelsResolver {
  constructor(private readonly hotelsService: HotelsService) {}

  @Mutation('createHotel')
  create(@Args('input') createHotelInput: CreateHotelInput) {
    return this.hotelsService.create(createHotelInput);
  }

  @Query('hotels')
  findAll() {
    return this.hotelsService.findAll();
  }

  @Query('hotel')
  findOne(@Args('id') id: number) {
    return this.hotelsService.findOne(id);
  }

  // @Mutation('updateHotel')
  // update(@Args('updateHotelInput') updateHotelInput: UpdateHotelInput) {
  //   return this.hotelsService.update(updateHotelInput.id, updateHotelInput);
  // }

  // @Mutation('removeHotel')
  // remove(@Args('id') id: number) {
  //   return this.hotelsService.remove(id);
  // }

  @ResolveField('review')
  abc(@Parent() hotel: Hotel) {
    return { __typename: 'Review', id: hotel.id };
  }
}

// [// month
//   [//week
//     [//day
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50",
//       "FullDay"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ]
//   ],
//   [
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ]
//   ],
//   [
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ]
//   ],
//   [
//     [
//       "9 hrs 00 mins",
//       "50",
//       "Fu"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ]
//   ],
//   [
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ],
//     [
//       "9 hrs 00 mins",
//       "50"
//     ],
//     [
//       null,
//       "50",
//       "FullDay"
//     ]
//   ]
// ]
