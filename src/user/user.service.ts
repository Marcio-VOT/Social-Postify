import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findUserFromEmail(email);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }
  async findUserById(id: number) {
    const user = await this.userRepository.findUserFromId(id);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }
}
