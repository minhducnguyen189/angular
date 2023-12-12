import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../models/product-model';
import { ProductDiablogComponent } from '../product-diablog/product-diablog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private dialog: MatDialog, private productService: ProductService){}
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

  showProductDialog(product: Product): void {
    this.dialog.open(ProductDiablogComponent,
      {
        data: product,
        width: '100%',
        height: '80%'
      });
    }

}
