import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AdicionarInseridoEmPipe implements PipeTransform {
  transform(programa: any) {
    programa.inseridoEm = new Date();
    return programa;
  }
}
