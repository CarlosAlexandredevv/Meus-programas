import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class AtualizarProgramaDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  site: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  categoria: string;

  @IsBoolean()
  @IsOptional()
  gratuito: boolean;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  comentarios: string;
}
