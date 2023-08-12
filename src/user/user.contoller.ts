import { Controller, Get, Patch, Post, Delete, Req, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class UserController {
  @Get()
  getUsers() {
    return { name: 'Aryan', email: 'gargaryan83000@gmail.com' };
  }

  @Post()
  store(@Req() request: Request) {
    return request.body;
  }

  @Patch('/:userId')
  update(@Req() request: Request) {
    return request.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
