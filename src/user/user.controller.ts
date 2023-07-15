import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
// import { Users } from '@prisma/client';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    return await this.userService.addUser(body);
  }
}
