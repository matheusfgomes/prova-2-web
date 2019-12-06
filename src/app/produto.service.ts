import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Produto} from './mock-produtos';
import { Observable, of } from 'rxjs';
import { MensagemServie} from './mensagem.service';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  constructor(private mensagemService: MensagemService) { }

  getProdutos(): Produto[]{
    return PRODUTOS;
  }

  getProdutos(): Observable<Produto[]>{

      this.mensagemService.add('ProdutoService: produto selecionado');
      return of (PRODUTOS);
  }

}