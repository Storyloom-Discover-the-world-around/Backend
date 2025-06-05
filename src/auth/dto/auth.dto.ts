import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
