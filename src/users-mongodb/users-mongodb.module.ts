import { Module } from '@nestjs/common';
import { UsersMongodbService } from './users-mongodb.service';
import { UsersMongodbController } from './users-mongodb.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './users-mongodb.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [UsersMongodbController],
  providers: [UsersMongodbService],
})
export class UsersMongodbModule {}
