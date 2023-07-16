import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PublicationRepository } from './publication.repository';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { UsersRepository } from 'src/user/user.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [PublicationController],
  providers: [
    PublicationService,
    PublicationRepository,
    AuthService,
    UserService,
    UsersRepository,
  ],
})
export class PublicationModule {}
