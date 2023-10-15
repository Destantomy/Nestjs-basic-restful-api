import { Test, TestingModule } from '@nestjs/testing';
import { UsersInMemoryController } from './users-in-memory.controller';
import { UsersInMemoryService } from './users-in-memory.service';

describe('UsersInMemoryController', () => {
  let controller: UsersInMemoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersInMemoryController],
      providers: [UsersInMemoryService],
    }).compile();

    controller = module.get<UsersInMemoryController>(UsersInMemoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
