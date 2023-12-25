import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product, ProductFilterResult } from '../models/product-model';
import { ProductDiablogComponent } from '../product-diablog/product-diablog.component';
import { MatDialog } from '@angular/material/dialog';
import { Order } from '../models/order-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private dialog: MatDialog, private productService: ProductService){}
  products: Product[] = [];
  orders: Order[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (productFilterResult: ProductFilterResult) => {
        this.products = productFilterResult.products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  showProductDialog(product: Product): void {
    const diablog = this.dialog.open(ProductDiablogComponent,
      {
        data: product,
        width: '100%',
        height: '80%',
        disableClose: true,
        hasBackdrop: true 
      });
      
    diablog.afterClosed().subscribe(
      (data: Order) => {
        if (data) {
          this.orders.push(data);
        }
      }
    );
  }

}
