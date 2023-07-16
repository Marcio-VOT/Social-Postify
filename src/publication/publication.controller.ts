import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from 'src/auth/decorators/user.decorator';
import { Users } from '@prisma/client';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Controller('')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Post('publication')
  async createNewPublication(
    @UserRequest() { id }: Users,
    @Body() body: CreatePublicationDTO,
  ) {
    await this.publicationService.createNewPublication(body, id);
  }

  @UseGuards(AuthGuard)
  @Get('publications')
  async listPublications(@UserRequest() { id }: Users) {
    return await this.publicationService.listPublications(id);
  }
}
