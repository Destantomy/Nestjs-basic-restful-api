import { Test, TestingModule } from '@nestjs/testing';
import { UsersMongodbService } from './users-mongodb.service';

describe('UsersMongodbService', () => {
  let service: UsersMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMongodbService],
    }).compile();

    service = module.get<UsersMongodbService>(UsersMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
