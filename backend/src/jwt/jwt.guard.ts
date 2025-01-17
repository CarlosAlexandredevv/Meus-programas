import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const token = request.headers.authorization.split(' ')[1];

    const enviarResposta = () =>
      response.status(403).json({
        mensagem: 'Acesso não autorizado',
      });

    if (!token) {
      return enviarResposta();
    }

    try {
      const tokenDecodificado = this.jwtService.decode(token);
      if (tokenDecodificado.exp < Math.round(Date.now() / 1000)) {
        return enviarResposta();
      }
    } catch {
      return enviarResposta();
    }

    return true;
  }
}
