import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/product';
import { PRODUCTS } from 'src/shared/products';
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit {
  cardapios: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cardapios = PRODUCTS;
  }
}
