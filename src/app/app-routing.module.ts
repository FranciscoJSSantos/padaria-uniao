import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/main/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'cardapio',
    loadChildren: () =>
      import('../app/main/cardapio/cardapio.module').then(
        (m) => m.CardapioModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('../app/main/contato/contato.module').then((m) => m.ContatoModule),
    pathMatch: 'full',
  },
  {
    path: 'encomenda',
    loadChildren: () =>
      import('../app/main/encomenda/encomenda.module').then(
        (m) => m.EncomendaModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'historia',
    loadChildren: () =>
      import('../app/main/historia/historia.module').then(
        (m) => m.HistoriaModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'localizacao',
    loadChildren: () =>
      import('../app/main/localizacao/localizacao.module').then(
        (m) => m.LocalizacaoModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
