import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './entity/user.entity';

// It is a provider that can inject dependencies. It can inject dependencies through constructor.
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    // return { name: 'Aryan', email: 'gargaryan83000@gmail.com' };
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    // return createUserDto;
    return this.userRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    // return { body: updateUserDto, userId };
    return this.userRepository.update(userId, updateUserDto);
  }

  getUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  findByEmail(email: string){
    return this.userRepository.findOne({ where: { email } });
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
