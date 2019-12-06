import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto.service';
import { ProdutoMensagensComponent } from './produto-mensagens/produto-mensagens.component';
import { MensagemService } from './mensagem.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProdutoComponent, ProdutoMensagensComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProdutoService, MensagemService]
})
export class AppModule { }
