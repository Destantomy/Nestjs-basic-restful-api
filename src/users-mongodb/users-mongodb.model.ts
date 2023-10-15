/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  ages: { type: Number, required: true }
});

export interface Users extends mongoose.Document {
    id: string;
    username: string;
    ages: number;
}