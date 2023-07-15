import { Module } from '@nestjs/common';
import { PublicationsModule } from './publications/publications.module';
import { PublicationModule } from './publication/publication.module';
import { SigninModule } from './signin/signin.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PublicationsModule,
    PublicationModule,
    SigninModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
