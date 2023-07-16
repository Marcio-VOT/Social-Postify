import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}
  async listPublications(id: number) {
    return await this.prisma.publications.findMany({
      where: { id },
    });
  }
}
