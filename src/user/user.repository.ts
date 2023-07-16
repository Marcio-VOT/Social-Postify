import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { UsersRepository } from '../user.repository';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser({ email, name, password, avatar }: CreateUserDTO) {
    return await this.prisma.users.create({
      data: {
        email,
        name,
        password,
        avatar,
      },
    });
  }

  async findUserFromEmail(email: string) {
    return await this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }
  async findUserFromId(id: number) {
    return await this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }
}
