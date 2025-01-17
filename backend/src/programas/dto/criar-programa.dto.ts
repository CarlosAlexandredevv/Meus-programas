import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CriarProgramaDTO {
  @IsString({ message: 'nome' })
  @IsNotEmpty({ message: 'nome' })
  nome: string;

  @IsString({ message: 'site' })
  @IsNotEmpty({ message: 'site' })
  site: string;

  @IsString({ message: 'descricao' })
  @IsNotEmpty({ message: 'descricao' })
  descricao: string;

  @IsString({ message: 'categoria' })
  @IsNotEmpty({ message: 'categoria' })
  categoria: string;

  @IsBoolean({ message: 'gratuito' })
  gratuito: boolean;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  comentarios: string;
}
