import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersInMemoryService } from './users-in-memory.service';

@Controller('api')
export class UsersInMemoryController {
  constructor(private readonly usersInMemoryService: UsersInMemoryService) {}

  @Post('test')
  create(@Body('username') userName: string, @Body('ages') userAges: number) {
    const add = this.usersInMemoryService.create(userName, userAges);
    return add;
  }

  @Get('test')
  findAll() {
    return this.usersInMemoryService.findAll();
  }

  @Get('test/:id')
  findOne(@Param('id') id: string) {
    return this.usersInMemoryService.findOne(id);
  }

  @Patch('test/:id')
  update(
    @Param('id') id: string,
    @Body('username') name: string,
    @Body('ages') ages: number,
  ) {
    return this.usersInMemoryService.update(id, name, ages);
  }

  @Delete('test/:id')
  remove(@Param('id') id: string) {
    return this.usersInMemoryService.remove(id);
  }
}
