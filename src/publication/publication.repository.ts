import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Injectable()
export class PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPublication(data: CreatePublicationDTO, userId: any) {
    return await this.prisma.publications.create({
      data: {
        ...data,
        dateToPublish: new Date(data.dateToPublish),
        userId,
      },
    });
  }
  async listPublications(userId: number) {
    return await this.prisma.publications.findMany({
      where: { userId },
    });
  }
  async getPublicationFromTitle(title: string) {
    return await this.prisma.publications.findUnique({
      where: { title },
    });
  }
}
