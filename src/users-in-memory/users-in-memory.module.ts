import { Module } from '@nestjs/common';
import { UsersInMemoryService } from './users-in-memory.service';
import { UsersInMemoryController } from './users-in-memory.controller';

@Module({
  controllers: [UsersInMemoryController],
  providers: [UsersInMemoryService],
})
export class UsersInMemoryModule {}
