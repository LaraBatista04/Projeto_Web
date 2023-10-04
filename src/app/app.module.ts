import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { LoginComponent } from './login/login.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';
import { DetalheCanetaComponent } from './detalhe-caneta/detalhe-caneta.component';
import { PaginaDeCadastroComponent } from './pagina-de-cadastro/pagina-de-cadastro.component';
import { DetalheChokerPulseiraComponent } from './detalhe-choker-pulseira/detalhe-choker-pulseira.component';
import { DetalheAnelComponent } from './detalhe-anel/detalhe-anel.component';
import { DetalhePandoraComponent } from './detalhe-pandora/detalhe-pandora.component';
import { DetalheArgolaAnelComponent } from './detalhe-argola-anel/detalhe-argola-anel.component';
import { BuscaComponent } from './busca/busca.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    DetalheProdutoComponent,
    CestaComprasComponent,
    LoginComponent,
    ReenvioSenhaComponent,
    DetalheCanetaComponent,
    PaginaDeCadastroComponent,
    DetalheChokerPulseiraComponent,
    DetalheAnelComponent,
    DetalhePandoraComponent,
    DetalheArgolaAnelComponent,
    BuscaComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
