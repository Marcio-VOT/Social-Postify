import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { UserService } from 'src/user/user.service';
import { Users } from '@prisma/client';
import { UsersRepository } from 'src/user/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}
  async signup(body: AuthSignupDTO) {
    const user = await this.userService.addUser(body);
    return this.createToken(user);
  }
  async signin({ email, password }: AuthSigninDTO) {
    const user = await this.userRepository.findUserFromEmail(email);
    if (!user) throw new UnauthorizedException('Email or Password Invalid');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      throw new UnauthorizedException('Email or Password Invalid');

    return this.createToken(user);
  }
  createToken({ name, email, id, avatar }: Users) {
    const token = this.jwtService.sign(
      {
        name,
        email,
        avatar,
      },
      {
        expiresIn: '7 days',
        subject: String(id),
        issuer: 'Social Postfy',
        audience: 'users',
      },
    );
    return { token };
  }
}
