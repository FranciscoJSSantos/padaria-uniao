import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { CardapioComponent } from './cardapio.component';



@NgModule({
  declarations: [CardapioComponent],
  imports: [
    CommonModule
  ],
  exports: [CardapioComponent, CardapioRoutingModule]
})
export class CardapioModule { }
