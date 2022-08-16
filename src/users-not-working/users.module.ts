import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './user.entity';
import { FavouriteMovie } from './favourite_movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, FavouriteMovie])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
