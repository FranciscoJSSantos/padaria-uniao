import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { CardapioComponent } from './cardapio.component';


@NgModule({
  declarations: [CardapioComponent],
  imports: [
    CommonModule, FormsModule, Ng2SearchPipeModule
  ],
  exports: [CardapioComponent, CardapioRoutingModule]
})
export class CardapioModule { }
