import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsersRepository) {}
  async addUser(body: CreateUserDTO) {
    const user = await this.userRepository.findUserFromEmail(body.email);
    if (user) throw new ConflictException('Email or Password Invalid');
    const hashPassword = bcrypt.hashSync(body.password, 10);
    return await this.userRepository.addUser({
      ...body,
      password: hashPassword,
    });
  }
}
