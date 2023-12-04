import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDataDto } from './dto/login-data.dto';
import { Observable, of } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  doLogin(@Body() loginDataDto: LoginDataDto): string {
    console.log(loginDataDto);
    const { email, password } = loginDataDto;

    if (this.authService.checkLoginCredentials(email, password)) {
      return 'OK';
    } else {
      return 'NOT OK';
    }
  }

  @Post('/login/async')
  async doLoginAsync(@Body() loginDataDto: LoginDataDto): Promise<string> {
    console.log(loginDataDto);
    const { email, password } = loginDataDto;
    const loginResult = await this.authService.checkLoginCredentialsAsync(
      email,
      password,
    );
    if (loginResult) {
      return 'OK';
    } else {
      return 'NOT OK';
    }
  }

  /**
   * NestJS geri donus tipinin Observable oldugunu gorunce buna uygun sekilde
   * RxJS listen islemi gerceklestirir.
   */
  @Get('/activate/:code')
  activateByCode(@Param('code') code: string): Observable<any[]> {
    return of([
      {
        code,
        test: 123,
      },
    ]);
  }

  @Get('/activate')
  activateByQueryCode(@Query('code') code: string): Observable<any[]> {
    return of([
      {
        code,
        test: 123,
      },
    ]);
  }
}
