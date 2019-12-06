import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Produto} from './mock-produtos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Produto[]{
    return PRODUTOS;
  }

  getProdutos(): Observable<Produto[]>{
      return of (PRODUTOS);
  }

}