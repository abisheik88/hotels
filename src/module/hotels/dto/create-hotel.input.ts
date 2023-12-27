import { IsNotEmpty } from 'class-validator';

export class CreateHotelInput {
  @IsNotEmpty()
  address: string;
}
