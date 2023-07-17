import { Module } from '@nestjs/common';
import { PublicationModule } from './publication/publication.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PublicationModule, UserModule, PrismaModule, AuthModule],
})
export class AppModule {}
