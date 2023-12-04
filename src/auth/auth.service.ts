import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  checkLoginCredentials(email: string, password: string): boolean {
    if (email === 'test@test.com' && password === '123') {
      return true;
    } else {
      return false;
    }
  }

  async checkLoginCredentialsAsync(
    email: string,
    password: string,
  ): Promise<boolean> {
    if (email === 'test@test.com' && password === '123') {
      return true;
    } else {
      return false;
    }
  }
}
