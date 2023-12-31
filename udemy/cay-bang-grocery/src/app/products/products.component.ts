import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { ProductFilterResult, ProductOverview } from '../models/product-model';
import { ProductDiablogComponent } from '../product-diablog/product-diablog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private dialog: MatDialog, private productService: ProductService){}
  productOverviews: ProductOverview[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (productFilterResult: ProductFilterResult) => {
        this.productOverviews = productFilterResult.products.map(product => ({
          product: product,
          orderQuantity: 0,
          isAddedToCart: false
        }));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  showProductDialog(productOverview: ProductOverview): void {
    const diablog = this.dialog.open(ProductDiablogComponent,
      {
        data: productOverview,
        width: '100%',
        height: '80%',
        disableClose: true,
        hasBackdrop: true 
      });
      
    // diablog.afterClosed().subscribe();
  }

}
