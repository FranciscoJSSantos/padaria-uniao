import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Feedback } from 'src/shared/feedback';
import { FEEDBACK } from 'src/shared/feedbacks';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  comentarios: Feedback[] = [];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.comentarios = FEEDBACK;
  }

}
