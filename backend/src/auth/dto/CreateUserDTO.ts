import { IsString, IsEmail } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;
}
