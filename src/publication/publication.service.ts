import { ConflictException, Injectable } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Injectable()
export class PublicationService {
  async createNewPublication(body: CreatePublicationDTO, userId: number) {
    const publication =
      await this.publicationRepository.getPublicationFromTitle(body.title);
    if (publication)
      throw new ConflictException(
        `The title ${publication.title} is already in use.`,
      );
    await this.publicationRepository.createPublication(body, userId);
  }
  constructor(private readonly publicationRepository: PublicationRepository) {}
  async listPublications(id: number) {
    return await this.publicationRepository.listPublications(id);
  }
}
