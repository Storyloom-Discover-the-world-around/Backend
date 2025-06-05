import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup(username: string, password: string) {
    return { message: 'User signed up', username, password };
  }

  login(username: string, password: string) {
    // Normally you'd check hashed password
    return { message: 'User logged in', username, password };
  }
}
