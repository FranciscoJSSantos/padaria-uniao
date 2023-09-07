import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoriaRoutingModule } from './historia-routing.module';
import { HistoriaComponent } from './historia.component';

@NgModule({
  declarations: [HistoriaComponent],
  imports: [CommonModule],
  exports: [HistoriaComponent, HistoriaRoutingModule],
})
export class HistoriaModule {}
