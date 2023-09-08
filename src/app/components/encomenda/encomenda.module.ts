import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EncomendaRoutingModule } from './encomenda-routing.module';
import { EncomendaComponent } from './encomenda.component';



@NgModule({
  declarations: [EncomendaComponent],
  imports: [
    CommonModule
  ],
  exports: [EncomendaComponent, EncomendaRoutingModule],
})
export class EncomendaModule { }
