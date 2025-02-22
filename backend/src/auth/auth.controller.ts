import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CriarUsuarioDTO } from './dto/criarUsuario.dto';
import { LogarUsuarioDTO } from './dto/logarUsuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('cadastrar')
  cadastrar(@Body() usuario: CriarUsuarioDTO) {
    return this.authService.cadastrar(usuario);
  }

  @Post('login')
  login(@Body() usuario: LogarUsuarioDTO) {
    return this.authService.logar(usuario);
  }
}
