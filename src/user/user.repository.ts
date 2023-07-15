import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { UsersRepository } from '../user.repository';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser({ email, name, password }: CreateUserDTO) {
    return await this.prisma.users.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  async findAllUsers() {
    return await this.prisma.users.findMany({});
  }
}
