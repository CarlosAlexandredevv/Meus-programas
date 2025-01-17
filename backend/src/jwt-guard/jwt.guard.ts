import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requisicao = context.switchToHttp().getRequest();
    const reposta = context.switchToHttp().getResponse();
    const token = requisicao.headers.authorization.split(' ')[1];

    const enviarResposta = () =>
      reposta.status(403).json({
        mensagem: 'Sessão expirada, faça login novamente',
      });

    if (!token) {
      return enviarResposta();
    }

    try {
      const tokenDecodificado = this.jwtService.decode(token);
      requisicao.emailUsuario = tokenDecodificado.email;
      if (tokenDecodificado.exp < Math.round(Date.now() / 1000)) {
        return enviarResposta();
      }
    } catch {
      return enviarResposta();
    }
    return true;
  }
}
