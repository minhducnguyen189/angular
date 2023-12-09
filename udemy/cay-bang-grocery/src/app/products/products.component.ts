import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productService: ProductService){}
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  doStuff() {
    console.log(this.products);
  }


}
