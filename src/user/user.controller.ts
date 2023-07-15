import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
// import { Users } from '@prisma/client';
import { UsersRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UsersRepository,
  ) {}

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    return await this.userRepository.addUser(body);
  }
}
