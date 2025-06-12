import { Module } from '@nestjs/common';
import { StoriesController } from './stories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StoriesService } from './stories.service';

@Module({
  imports: [PrismaModule],
  providers: [StoriesService],
  exports: [StoriesService],
  controllers: [StoriesController],
})
export class StoriesModule {}
