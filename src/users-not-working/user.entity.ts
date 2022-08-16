import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FavouriteMovie } from './favourite_movies.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  forename: string;

  @Column()
  surname: string;

  @OneToMany((_type) => FavouriteMovie, (movie) => movie.user, { eager: true })
  favourite_movies: FavouriteMovie[];
}
