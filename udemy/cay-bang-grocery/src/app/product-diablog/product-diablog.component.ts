import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductOverview } from '../models/product-model';
import { ConfirmtationDiablogComponent } from '../confirmtation-diablog/confirmtation-diablog.component';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-product-diablog',
  templateUrl: './product-diablog.component.html',
  styleUrls: ['./product-diablog.component.scss'],
})
export class ProductDiablogComponent implements OnInit {

  num: number = 1;
  totalPrice: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public productOverview: ProductOverview,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ProductDiablogComponent, ProductOverview>,
              private sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    this.num = this.productOverview.orderQuantity;
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
    this.totalPrice = this.productOverview.product.price * this.num;
  }

  handleAddToCart() {
    this.productOverview.isAddedToCart = true;
    this.productOverview.orderQuantity = this.num;
    this.sessionStorageService.storeSelectedProduct(this.productOverview);
  }

  cancelOrder() {
    const diablog = this.dialog.open(ConfirmtationDiablogComponent,
    {
      data: this.productOverview,
      disableClose: true,
      hasBackdrop: true 
    });
    diablog.afterClosed().subscribe(
      (data: boolean) => {
        if (data && data === true) {
          this.productOverview.isAddedToCart = false;
          this.productOverview.orderQuantity = 0;
          this.sessionStorageService.removeSelectedProduct(this.productOverview);
          this.num = 1;
          this.totalPrice = this.productOverview.product.price;
        }
      }
    );
  }

  closeDialog() {
    if (this.productOverview.isAddedToCart) {
      this.dialogRef.close(this.productOverview);
    } else {
      this.dialogRef.close();
    }
  }

}
