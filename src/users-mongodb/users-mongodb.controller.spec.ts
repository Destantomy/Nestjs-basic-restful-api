import { Test, TestingModule } from '@nestjs/testing';
import { UsersMongodbController } from './users-mongodb.controller';
import { UsersMongodbService } from './users-mongodb.service';

describe('UsersMongodbController', () => {
  let controller: UsersMongodbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersMongodbController],
      providers: [UsersMongodbService],
    }).compile();

    controller = module.get<UsersMongodbController>(UsersMongodbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
