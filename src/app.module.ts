import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersInMemoryModule } from './users-in-memory/users-in-memory.module';

@Module({
  imports: [UsersInMemoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
