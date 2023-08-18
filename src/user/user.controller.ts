import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Req,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
  // private userService;

  // ! Dependency Injection as injecting service in constructor.
  constructor(private userService: UserService) {}

  //! Normal way of importing
  // constructor(userService: UserService){
  //   this.userService = userService;
  //   this.userService = new UserService();
  // }
  @Get()
  getUsers() {
    return this.userService.get();
    // return { name: 'Aryan', email: 'gargaryan83000@gmail.com' };
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    // return request.body;
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param() param: { userId: number },
  ) {
    // return request.body;
    return this.userService.update(updateUserDto, param);
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUser(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
