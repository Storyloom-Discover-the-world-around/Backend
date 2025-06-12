import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStoryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsObject()
  story: Record<string, string>;

  @IsOptional()
  @IsString()
  author?: string;
}
