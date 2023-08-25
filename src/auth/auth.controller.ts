import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  @Post('/login')
  async login(@Body() loginDto: any) {
  }
}
