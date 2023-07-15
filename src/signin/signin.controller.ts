import { Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';

@Controller('signin')
export class SigninController {
  constructor(private readonly signinService: SigninService) {}

  @Post()
  signin(): void {
    this.signinService.signin();
  }
}
