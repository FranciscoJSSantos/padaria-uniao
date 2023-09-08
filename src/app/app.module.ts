import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HeaderComponent } from './utils/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LocalizacaoComponent,
    ContatoComponent,
    CardapioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
