import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly usersModel: Model<any>,
    @InjectModel('FavouriteMovie')
    private readonly favouriteMoviesModel: Model<any>,
  ) {}
  async addUser(addUserDto) {
    const user = await new this.usersModel(addUserDto).save();
    return user;
  }

  async addEditFavouriteMovie(userID, addEditFavouriteMovieDto) {
    addEditFavouriteMovieDto.user = userID;
    if (addEditFavouriteMovieDto._id) {
      return await this.favouriteMoviesModel.findByIdAndUpdate(
        addEditFavouriteMovieDto._id,
        addEditFavouriteMovieDto,
        { upsert: true },
      );
    }
    const favouriteMovie = await new this.favouriteMoviesModel(
      addEditFavouriteMovieDto,
    ).save();
    return favouriteMovie;
  }

  async deleteFavouriteMovie(movieID: any) {
    return await this.favouriteMoviesModel.findByIdAndDelete(movieID);
  }

  async getAllUsers(): Promise<any[]> {
    return await this.usersModel.aggregate([
      {
        $lookup: {
          from: 'favourite_movies',
          localField: '_id',
          foreignField: 'user',
          as: 'favourite_movies',
        },
      },
      // {
      //   $unwind: {
      //     path: '$favourite_movies',
      //   },
      // },

      {
        $project: {
          _id: '$_id',
          favourite_movies: '$favourite_movies',
          forename: '$forename',
          surname: '$surname',
        },
      },
      { $sort: { type: -1 } },
    ]);
  }
  async signIn(userDto: any): Promise<any> {
    const users = await this.usersModel
      .find({
        forename: userDto.forename,
        surname: userDto.surname,
      })
      .exec();
    const user = users[0];
    return user;
  }
}
