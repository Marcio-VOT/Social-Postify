import { Controller, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}
  @Post()
  createNewPublication(): void {
    this.publicationService.createNewPublication();
  }
}
