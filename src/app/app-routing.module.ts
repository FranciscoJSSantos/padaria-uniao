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
      import('../app/components/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'cardapio',
    loadChildren: () =>
      import('../app/components/cardapio/cardapio.module').then(
        (m) => m.CardapioModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('../app/components/contato/contato.module').then((m) => m.ContatoModule),
    pathMatch: 'full',
  },
  {
    path: 'encomenda',
    loadChildren: () =>
      import('../app/components/encomenda/encomenda.module').then(
        (m) => m.EncomendaModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'historia',
    loadChildren: () =>
      import('../app/components/historia/historia.module').then(
        (m) => m.HistoriaModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'localizacao',
    loadChildren: () =>
      import('../app/components/localizacao/localizacao.module').then(
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
