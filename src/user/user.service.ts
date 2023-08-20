import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';

// It is a provider that can inject dependencies. It can inject dependencies through constructor.
@Injectable()
export class UserService {
  get() {
    return { name: 'Aryan', email: 'gargaryan83000@gmail.com' };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }

  getUser(userId: number) {
    return { userId };
  }

  delete(userId: number) {
    return userId;
  }
}
