import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class UsersController {
  @Get('')
  user() {
    return {
      message: 'User (simulated)',
    };
  }
}
