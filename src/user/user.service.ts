import { Injectable } from '@nestjs/common';

// It is a provider that can inject dependencies. It can inject dependencies through constructor.   
@Injectable()
export class UserService {
    get(){
        return { name: 'Aryan', email: 'gargaryan83000@gmail.com' };
    }
}
