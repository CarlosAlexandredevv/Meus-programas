import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto/CreateUserDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('cadastrar')
  register(@Body() user: CreateUserDTO) {
    return this.authService.register(user);
  }
}
