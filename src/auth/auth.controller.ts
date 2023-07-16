import { Body, Controller, Post } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthService } from './auth.service';
import { AuthSignupDTO } from './dto/auth-signup.dto';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  async signin(@Body() body: AuthSigninDTO) {
    return this.authService.signin(body);
  }
  @Post('user')
  async signup(@Body() body: AuthSignupDTO) {
    return this.authService.signup(body);
  }
}
