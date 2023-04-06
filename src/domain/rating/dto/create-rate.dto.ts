import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRatingDto {
  @IsNumber()
  @IsNotEmpty()
  readonly collectionId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly rate: number;
}
