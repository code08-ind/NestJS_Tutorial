import { Injectable } from '@nestjs/common';
import { Request } from 'express';

// It is a provider that can inject dependencies. It can inject dependencies through constructor.
@Injectable()
export class UserService {
  get() {
    return { name: 'Aryan', email: 'gargaryan83000@gmail.com' };
  }

  create(req: Request) {
    return req.body;
  }

  update()
}
