import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './user.entity';

@Entity()
export class FavouriteMovie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((_type) => Users, (user) => user.favourite_movies, {
    eager: false,
  })
  user: Users;

  @Column()
  movie_id: string;
}
