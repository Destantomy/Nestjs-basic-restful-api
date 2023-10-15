import { Test, TestingModule } from '@nestjs/testing';
import { UsersInMemoryService } from './users-in-memory.service';

describe('UsersInMemoryService', () => {
  let service: UsersInMemoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersInMemoryService],
    }).compile();

    service = module.get<UsersInMemoryService>(UsersInMemoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
