import { IsNotEmpty } from 'class-validator';

export class CreateFavouriteMovieDto {
  @IsNotEmpty()
  movie_id: string;
}
