import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../services/session-storage.service';
import { ProductOverview } from '../models/product-model';
import { FormControl, Validators } from '@angular/forms';
import { Order, OrderDetail } from '../models/order-model';
import { CustomErrorStateMatcher } from '../shared/error-state-matcher';
import { ConfirmtationDiablogComponent } from '../confirmtation-diablog/confirmtation-diablog.component';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  selectedProducts: ProductOverview[] = []
  order!: Order;
  matcher = new CustomErrorStateMatcher();
  orderDetail!: OrderDetail;

  constructor(public dialog: MatDialog,
              private sessionStorageService: SessionStorageService,
              private orderService: OrderService) {

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

  createOrder() {
    this.orderService.createOrder({
      firstName: this.order.firstName.value,
      lastName: this.order.lastName.value,
      email: this.order.email.value,
      phone: this.order.phone.value,
      address: this.order.address.value,
      sex: this.order.sex.value
    })
    .subscribe(detail => this.orderDetail = detail);
  }

}
