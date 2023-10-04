// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { DetalheCanetaComponent } from './detalhe-caneta/detalhe-caneta.component';
import { DetalheAnelComponent } from './detalhe-anel/detalhe-anel.component';
import { DetalheChokerPulseiraComponent } from './detalhe-choker-pulseira/detalhe-choker-pulseira.component';
import { DetalheArgolaAnelComponent } from './detalhe-argola-anel/detalhe-argola-anel.component';
import { DetalhePandoraComponent } from './detalhe-pandora/detalhe-pandora.component';
import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { LoginComponent } from './login/login.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';
import { PaginaDeCadastroComponent } from './pagina-de-cadastro/pagina-de-cadastro.component';
import { BuscaComponent } from './busca/busca.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: 'vitrine', component: VitrineComponent },
  { path: 'conjunto_anel_choker', component: DetalheProdutoComponent },
  { path: 'caneta', component: DetalheCanetaComponent },
  { path: 'anel', component: DetalheAnelComponent },
  { path: 'choker_pulseira', component: DetalheChokerPulseiraComponent },
  { path: 'argola_anel', component: DetalheArgolaAnelComponent },
  { path: 'pandora', component: DetalhePandoraComponent },
  { path: 'cesta', component: CestaComprasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reenvio-senha', component: ReenvioSenhaComponent },
  { path: 'cadastro', component: PaginaDeCadastroComponent },
  { path: 'busca', component: BuscaComponent },
  {path: 'home', component: PaginaInicialComponent},
  { path: 'pagamento', component: PagamentoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
