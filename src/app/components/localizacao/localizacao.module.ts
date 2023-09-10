import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalizacaoRoutingModule } from './localizacao-routing.module';
import { LocalizacaoComponent } from './localizacao.component';



@NgModule({
  declarations: [LocalizacaoComponent],
  imports: [
    CommonModule
  ],
  exports: [LocalizacaoComponent, LocalizacaoRoutingModule]
})
export class LocalizacaoModule { }
