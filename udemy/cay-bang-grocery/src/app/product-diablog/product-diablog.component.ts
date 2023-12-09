import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-product-diablog',
  templateUrl: './product-diablog.component.html',
  styleUrls: ['./product-diablog.component.scss'],
})
export class ProductDiablogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) {}

  ngOnInit(): void {
    console.log(this.product);
  }



}
