import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../models/order-model';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-product-diablog',
  templateUrl: './product-diablog.component.html',
  styleUrls: ['./product-diablog.component.scss'],
})
export class ProductDiablogComponent implements OnInit {

  num: number = 1;
  totalPrice: number = 0;
  addedToCart: boolean = false;
  isDisabled: boolean = false;
  order: Order | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product,
              public dialogRef: MatDialogRef<ProductDiablogComponent, Order>) {}

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

  handleAddToCart() {
    this.isDisabled = true;
    this.addedToCart = true;
    this.order = {
      quantity: this.totalPrice,
      selectedProduct: this.product
    }
  }

  cancelOrder() {
    this.isDisabled = false;
    this.addedToCart = false;
    this.order = undefined;
    this.num = 1;
    this.totalPrice = this.product.price;
  }

  closeDialog() {
    if (this.addedToCart) {
      this.dialogRef.close(this.order);
    } else {
      this.dialogRef.close();
    }
  }

}
