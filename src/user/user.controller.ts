import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Req,
  Param,
  Body,
  ParseIntPipe,
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
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    // return request.body;
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
