import { IsOptional } from 'class-validator';

export class EditarSoftwareDTO {
  @IsOptional()
  id?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  site?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  free?: boolean;

  @IsOptional()
  comments?: string;
}
