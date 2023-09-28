// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';

const routes: Routes = [
  { path: 'vitrine', component: VitrineComponent },
  { path: 'produto/:id', component: DetalheProdutoComponent },
  { path: 'cesta', component: CestaComprasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'reenvio-senha', component: ReenvioSenhaComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
