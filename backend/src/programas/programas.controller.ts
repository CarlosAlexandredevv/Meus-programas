import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  UsePipes,
  UseInterceptors,
  UseFilters,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CriarProgramaDTO } from './dto/criar-programa.dto';
import { AtualizarProgramaDTO } from './dto/atualizar-programa.dto';
import { AdicionarInseridoEmPipe } from 'src/pipes/adicionar-inserido-em.pipe';
import { FormatarProgramaInterceptor } from 'src/interceptors/formatar-programa.interceptor';
import { CriarProgramaFilter } from 'src/filters/criar-programa.filter';
import { JwtGuard } from 'src/jwt-guard/jwt.guard';
import { EmailUsuario } from 'src/pegar-email/pegar-email.decorator';

@Controller('programas')
@UseGuards(JwtGuard)
export class ProgramasController {
  constructor(private readonly programaService: ProgramasService) {}

  @Post()
  // @UsePipes(AdicionarInseridoEmPipe)
  @UseFilters(CriarProgramaFilter)
  criar(
    @Body(AdicionarInseridoEmPipe) programa: CriarProgramaDTO,
    @EmailUsuario() email: string,
  ) {
    return this.programaService.criar(programa, email);
  }

  @Get()
  @UseInterceptors(FormatarProgramaInterceptor)
  pegar(@EmailUsuario() email: string) {
    return this.programaService.pegar(email);
  }

  @Get(':id')
  @UseInterceptors(FormatarProgramaInterceptor)
  pegarUm(@Param('id') id: string, @EmailUsuario() email: string) {
    return this.programaService.pegarUm(+id, email);
  }

  @Delete(':id')
  deletar(@Param('id') id: string, @EmailUsuario() email: string) {
    return this.programaService.deletar(+id, email);
  }

  @Put(':id')
  @UseInterceptors(FormatarProgramaInterceptor)
  atualizar(
    @Param('id') id: string,
    @Body() programaAtualizado: AtualizarProgramaDTO,
    @EmailUsuario() email: string,
  ) {
    return this.programaService.atualizar(+id, programaAtualizado, email);
  }
}
