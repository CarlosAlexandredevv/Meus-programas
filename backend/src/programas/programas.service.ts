import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarProgramaDTO } from './dto/criar-programa.dto';
import { AtualizarProgramaDTO } from './dto/atualizar-programa.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ProgramasService {
  constructor(private readonly authService: AuthService) {}

  programas: any = [
    {
      nome: 'GIMP',
      site: 'https://www.gimp.org',
      descricao: 'GIMP é um editor de imagens gratuito e de código aberto.',
      categoria: 'UTILITARIO',
      gratuito: true,
      comentarios: 'Tem me ajudado bastante a editar imagens.',
      inseridoEm: Date.now(),
      id: 0,
      idUsuario: 1000,
    },
    {
      nome: 'LibreOffice',
      site: 'https://www.libreoffice.org',
      descricao: 'LibreOffice é uma suíte de escritório gratuita e de código aberto.',
      categoria: 'UTILITARIO',
      gratuito: true,
      comentarios: 'Uso o LibreOffice para todas as minhas necessidades de escritório.',
      inseridoEm: Date.now(),
      id: 2,
      idUsuario: 1001,
    },
    {
      nome: 'VLC Media Player',
      site: 'https://www.videolan.org/vlc/',
      descricao: 'VLC é um reprodutor multimídia gratuito e de código aberto.',
      categoria: 'MULTIMIDIA',
      gratuito: true,
      comentarios: 'VLC é ótimo para reproduzir qualquer tipo de mídia.',
      inseridoEm: Date.now(),
      id: 4,
      idUsuario: 1001,
    },
  ];

  proximoId = 5;

  pegarIdUsuario(email: string) {
    const usuario = this.authService.pegarUsuarioPorEmail(email);
    if (!usuario) {
      // Retorne array vazio ou lance exceção, dependendo do comportamento desejado
      return [];
    }
    const id = usuario.id;
    const userPrograms = this.programas.filter(
      (programa) => programa.idUsuario === id,
    );
    return userPrograms || [];
  }

  criar(programa: CriarProgramaDTO, emailUsuario: string) {
    const idUsuario = this.pegarIdUsuario(emailUsuario);
    return this.programas.push({
      ...programa,
      id: this.proximoId++,
      idUsuario,
    });
  }

  pegar(email: string) {
    const id = this.pegarIdUsuario(email);
    return this.programas.filter((programa) => +programa.idUsuario === +id);
  }

  pegarUm(id: number, email: string) {
    const idUsuario = this.pegarIdUsuario(email);
    return this.programas.find(
      (programa) => programa.id === id && programa.idUsuario === idUsuario,
    );
  }

  deletar(id: number, email: string) {
    const idUsuario = this.pegarIdUsuario(email);
    const indice = this.programas.findIndex(
      (programa) => programa.id === id && programa.idUsuario === idUsuario,
    );
    return this.programas.splice(indice, 1);
  }

  atualizar(
    id: number,
    programaAtualizado: AtualizarProgramaDTO,
    email: string,
  ) {
    const idUsuario = this.pegarIdUsuario(email);
    const indice = this.programas.findIndex(
      (programa) => programa.id === id && programa.idUsuario === idUsuario,
    );
    const programaNovo = { ...this.programas[indice], ...programaAtualizado };
    this.programas[indice] = programaNovo;
    return programaNovo;
  }

  findAll() {
    if (!this.programas || this.programas.length === 0) {
      return [];
    }
    return this.programas;
  }
}