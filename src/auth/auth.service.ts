import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async validateUser() {
    const user = await this.userService.findByEmail(loginDto.email);
    if (user) {
      if (user.password === loginDto.password) {
        return user;
      }
      return "password doesn't match";
    }
    return 'unauthenticated';
  }
}
