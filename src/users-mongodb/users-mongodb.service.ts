import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users } from './users-mongodb.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersMongodbService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<Users>,
  ) {}

  // validating user by id
  private async findById(id: string): Promise<Users> {
    let isFind;
    try {
      isFind = await this.usersModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException(`${id} is not find`);
    }
    if (!isFind) {
      throw new NotFoundException(`could not find ${id}`);
    }
    return isFind;
  }

  async create(username: string, ages: number) {
    const create = new this.usersModel({
      username,
      ages,
    });
    const result = await create.save();
    return result;
  }

  async findAll() {
    const users = await this.usersModel.find().exec();
    return users.map((user) => ({
      id: user.id,
      username: user.username,
      ages: user.ages,
    }));
  }

  async findOne(id: string) {
    const user = await this.findById(id);
    return {
      id: user.id,
      username: user.username,
      ages: user.ages,
    };
  }

  async update(id: string, username: string, ages: number) {
    const updateUser = await this.findById(id);
    if (username) {
      updateUser.username = username;
    }
    if (ages) {
      updateUser.ages = ages;
    }
    updateUser.save();
  }

  async remove(id: string) {
    const result = await this.usersModel.deleteOne({ _id: id }).exec();
    if (!result) {
      throw new NotFoundException(`${id} not found`);
    }
  }
}
