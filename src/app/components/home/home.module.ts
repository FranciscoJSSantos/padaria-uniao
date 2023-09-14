import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule, SwiperModule 
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, HomeRoutingModule],
})
export class HomeModule { }
