import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { CreateStoryDto } from './dto/create-story.dto';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Post()
  create(@Body() createStoryDto: CreateStoryDto) {
    console.log('called', createStoryDto);
    return this.storiesService.create(createStoryDto);
  }

  @Get()
  findAll(@Query('page') page = '1', @Query('limit') limit = '10') {
    console.log(page, limit);
    return this.storiesService.findAll();
  }
}
