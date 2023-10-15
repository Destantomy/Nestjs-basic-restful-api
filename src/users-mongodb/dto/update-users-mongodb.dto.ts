import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersMongodbDto } from './create-users-mongodb.dto';

export class UpdateUsersMongodbDto extends PartialType(CreateUsersMongodbDto) {}
