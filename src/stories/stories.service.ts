/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { Story } from 'generated/prisma';

@Injectable()
export class StoriesService {
  constructor(private prisma: PrismaService) {}

  create(createStoryDto: CreateStoryDto): Promise<Story> {
    return this.prisma.story.create({
      data: {
        ...createStoryDto,
        author: createStoryDto.author || 'Storyloom',
      },
    });
  }

  findAll(): Promise<Story[]> {
    return this.prisma.story.findMany();
  }
}
