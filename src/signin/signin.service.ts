import { Injectable } from '@nestjs/common';
import { SignInDTO } from './dto/signin.dto';

@Injectable()
export class SigninService {
  signin(body: SignInDTO) {
    return body;
  }
}
