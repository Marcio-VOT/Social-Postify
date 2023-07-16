import { Injectable } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}
  async listPublications(id: number) {
    return await this.publicationRepository.listPublications(id);
  }
  createNewPublication() {
    throw new Error('Method not implemented.');
  }
}
