import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUserDTO';

@Injectable()
export class AuthService {
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
}
