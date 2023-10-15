import {
  Controller,
  Param,
  Body,
  BadRequestException,
  Post,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersMongodbService } from './users-mongodb.service';

@Controller('api')
export class UsersMongodbController {
  constructor(private readonly usersMongodbService: UsersMongodbService) {}

  @Post('users')
  async create(@Body('username') username: string, @Body('ages') ages: number) {
    try {
      const generatedId = await this.usersMongodbService.create(username, ages);
      return generatedId;
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }

  @Get('users')
  async findAll() {
    return await this.usersMongodbService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id') id: string) {
    return await this.usersMongodbService.findOne(id);
  }

  @Patch('user/:id')
  async update(
    @Param('id') userId: string,
    @Body('username') userName: string,
    @Body('ages') userAges: number,
  ) {
    try {
      const updated = await this.usersMongodbService.update(
        userId,
        userName,
        userAges,
      );
      return updated;
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }

  @Delete('user/:id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersMongodbService.remove(id);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }
}
