import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersInMemory } from './entities/users-in-memory.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class UsersInMemoryService {
  private readonly users: UsersInMemory[] = [];

  // valdate find a user
  private findUser(id: string): [UsersInMemory, number] {
    const userIndex = this.users.findIndex((userr) => userr.id === id);
    const isUser = this.users[userIndex];
    if (!isUser) {
      throw new NotFoundException('User id not found');
    }
    return [isUser, userIndex];
  }

  create(username: string, ages: number) {
    const id = `user-${nanoid(10)}`;
    const newUser = new UsersInMemory(id, username, ages);
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return [...this.users];
  }

  findOne(id: string) {
    const isMatch = this.findUser(id)[0];
    return { ...isMatch };
  }

  update(id: string, username: string, ages: number) {
    const [user, index] = this.findUser(id);
    const updateUser = { ...user };
    if (username) {
      updateUser.username = username;
    }
    if (ages) {
      updateUser.ages = ages;
    }
    this.users[index] = updateUser;
  }

  remove(id: string) {
    const isMatch = this.findUser(id)[1];
    this.users.splice(isMatch, 1);
  }
}
