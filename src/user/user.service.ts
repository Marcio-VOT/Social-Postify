import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './user.repository';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsersRepository) {}
  async addUser(body: CreateUserDTO) {
    const user = await this.userRepository.findUserFromEmail(body.email);
    if (user) throw new ConflictException('Email or Password Invalid');
    this.userRepository.addUser(body);
  }
  createUser() {
    throw new Error('Method not implemented.');
  }
}
