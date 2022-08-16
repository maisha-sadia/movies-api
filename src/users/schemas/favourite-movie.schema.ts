import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

export const FavouriteMoviesSchema = new mongoose.Schema(
  {
    imdbID: String,
    user: {
      type: ObjectId,
      ref: 'User',
      index: true,
    },
  },
  {
    collection: 'favourite_movies',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
