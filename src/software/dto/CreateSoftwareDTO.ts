import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class createSoftwareDTO {
  id: string;
  createdAt: Date;

  @IsNotEmpty()
  @IsString({ message: 'The name must be a string' })
  @Length(3, 50, { message: 'The name must be between 3 and 50 characters' })
  name: string;

  @IsNotEmpty()
  @IsString({ message: 'The site must be a string' })
  @Length(1, 35, { message: 'The site must be between 1 and 20 characters' })
  site: string;

  @IsNotEmpty()
  @IsString({ message: 'The description must be a string' })
  @Length(1, 200, {
    message: 'The description must be between 1 and 200 characters',
  })
  description: string;

  @IsNotEmpty()
  @IsBoolean({ message: 'The free must be a boolean' })
  free: boolean;

  @IsOptional()
  @IsString({ message: 'The comments must be a string' })
  comments?: string;
}
