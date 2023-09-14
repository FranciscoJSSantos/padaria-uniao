import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';



@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule
  ],
  exports: [ContatoComponent, ContatoRoutingModule],
})
export class ContatoModule { }
