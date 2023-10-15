import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersInMemoryDto } from './create-users-in-memory.dto';

export class UpdateUsersInMemoryDto extends PartialType(CreateUsersInMemoryDto) {}
