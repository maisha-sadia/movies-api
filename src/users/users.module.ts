import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/user.schema';
import { FavouriteMoviesSchema } from './schemas/favourite-movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UsersSchema },
      { name: 'FavouriteMovie', schema: FavouriteMoviesSchema },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
