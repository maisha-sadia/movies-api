import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  forename: string;

  @IsNotEmpty()
  surname: string;

  @IsNotEmpty()
  favourite_movies: any[];
}
