import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersInMemoryModule } from './users-in-memory/users-in-memory.module';
import { UsersMongodbModule } from './users-mongodb/users-mongodb.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    UsersInMemoryModule,
    UsersMongodbModule,
    MongooseModule.forRoot(
      'mongodb://admin:1234@ac-jbyx825-shard-00-00.x5ol5sw.mongodb.net:27017,ac-jbyx825-shard-00-01.x5ol5sw.mongodb.net:27017,ac-jbyx825-shard-00-02.x5ol5sw.mongodb.net:27017/?ssl=true&replicaSet=atlas-q7h29i-shard-0&authSource=admin&retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
