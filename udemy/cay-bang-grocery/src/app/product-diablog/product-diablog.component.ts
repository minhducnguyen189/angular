import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-product-diablog',
  templateUrl: './product-diablog.component.html',
  styleUrls: ['./product-diablog.component.scss'],
})
export class ProductDiablogComponent implements OnInit {

  num: number = 1;
  totalPrice: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) {}

  ngOnInit(): void {
    this.calculatePrice();
  }



  handleMinus() {
    if (this.num >= 1) {
      this.num--;
    }
    this.calculatePrice();
  }
  handlePlus() {
    this.num++;
    this.calculatePrice();
  }

  calculatePrice() {
    this.totalPrice = this.product.price * this.num;
  }

}
