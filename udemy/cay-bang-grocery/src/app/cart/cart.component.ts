import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../services/session-storage.service';
import { ProductOverview } from '../models/product-model';
import { FormControl, Validators } from '@angular/forms';
import { Order } from '../models/order-model';
import { CustomErrorStateMatcher } from '../shared/error-state-matcher';
import { ConfirmtationDiablogComponent } from '../confirmtation-diablog/confirmtation-diablog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  selectedProducts: ProductOverview[] = []
  order!: Order;
  matcher = new CustomErrorStateMatcher();

  constructor(public dialog: MatDialog,
              private sessionStorageService: SessionStorageService) {

  }

  ngOnInit(): void {
    this.selectedProducts = this.sessionStorageService.getSelectedProducts();
    this.order = {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      sex: new FormControl(''),
    }
  }

  displayedColumns: string[] = ['item', 'price', 'quantity', 'cost'];

  getTotalCost() {
    return this.selectedProducts.map(t => {return t.product.price * t.orderQuantity }).reduce((acc, value) => acc + value, 0);
  }

  getTotalQuantity() {
    return this.selectedProducts.map(t => t.orderQuantity).reduce((acc, value) => acc + value, 0);
  }

  clearCart() {
    const diablog = this.dialog.open(ConfirmtationDiablogComponent,
      {
        data: 'all selected items',
        disableClose: true,
        hasBackdrop: true 
      });
      diablog.afterClosed().subscribe(
        (data: boolean) => {
          if (data && data === true) {
            this.sessionStorageService.removeAllSelectedProduct();
            this.selectedProducts = [];
          }
        }
      );
  }

}
