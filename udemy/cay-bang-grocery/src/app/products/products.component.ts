import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductFilterResult, ProductOverview } from '../models/product-model';
import { ProductDiablogComponent } from '../product-diablog/product-diablog.component';
import { MatDialog } from '@angular/material/dialog';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private dialog: MatDialog, private productService: ProductService, private sessionStorageService: SessionStorageService){}
  productOverviews: ProductOverview[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (productFilterResult: ProductFilterResult) => {
        this.productOverviews = productFilterResult.products.map(product => ({
          product: product,
          orderQuantity: 0,
          isAddedToCart: false
        }));
        const selectedProducts = this.sessionStorageService.getSelectedProducts();
        this.productOverviews.filter(p => selectedProducts.some((product) => p.product.id === product.product.id))
        .map(product => {
          let selectedProduct = selectedProducts.find(p => p.product.id === product.product.id);
          product.orderQuantity = selectedProduct?.orderQuantity || 0;
          product.isAddedToCart = selectedProduct?.isAddedToCart || false;
        });
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
