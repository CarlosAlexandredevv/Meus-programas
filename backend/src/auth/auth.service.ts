import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from './dto/LogarUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  users = [
    {
      nome: 'Carlos',
      email: 'carlos@gmail.com',
      senha: '1123',
      id: 1000,
    },
    {
      nome: 'Fabio',
      email: 'fabio@gmail.com',
      senha: '123',
      id: 1001,
    },
  ];

  nextId = 1002;

  register(user: CreateUserDTO) {
    return this.users.push({
      ...user,
      id: this.nextId++,
    });
  }

  login(user: LoginUserDTO) {
    const { email, senha } = user;
    const userApp = this.users.find((user) => user.email === email);

    if (!userApp || userApp?.senha !== senha) {
      throw new UnauthorizedException();
    }

    const payload = {
      email: userApp.email,
    };

    return {
      nome: userApp.nome,
      email: userApp.email,
      token: this.jwtService.sign(payload),
    };
  }
}
