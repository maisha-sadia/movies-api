import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

export const UsersSchema = new mongoose.Schema(
  {
    forename: String,
    surname: String,
  },
  {
    collection: 'users',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
