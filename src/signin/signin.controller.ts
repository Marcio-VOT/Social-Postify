import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SignInDTO } from './dto/signin.dto';

@Controller('signin/internal')
export class SigninController {
  constructor(private readonly signinService: SigninService) {}

  @Post()
  signin(@Body() body: SignInDTO) {
    this.signinService.signin(body);
  }
}
