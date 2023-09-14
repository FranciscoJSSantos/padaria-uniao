import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from 'src/shared/product';
import { PRODUCTS } from 'src/shared/products';
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit {

  public screenWidth: any;

  searchTerm: any;
  cardapios: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cardapios = PRODUCTS;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  tamTxt() {
    if (this.screenWidth >= 640) {
      return 'ellipsis';
    } else {
      return '';
    }
  }
}
