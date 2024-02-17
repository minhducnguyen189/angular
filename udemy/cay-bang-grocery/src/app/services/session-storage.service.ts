import { Injectable } from '@angular/core';
import { ProductOverview } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  storeSelectedProduct(productOverview: ProductOverview) {
    let products = this.getSelectedProducts();
    products.push(productOverview);
    sessionStorage.setItem("products", JSON.stringify(products));
  }

  getSelectedProducts(): ProductOverview[] {
    const products = sessionStorage.getItem("products");
    if (products) {
      return JSON.parse(products);
    }
    return [];
  }

  removeSelectedProduct(productOverview: ProductOverview) {
    let products = this.getSelectedProducts();
    if (products.length === 0) {
      return;
    }
    const removeProduct = (removeId: string) => {
      const res = products.filter(product => product.product.id !== removeId);
      return res;
    }
    const newProducts = removeProduct(productOverview.product.id);
    sessionStorage.setItem("products", JSON.stringify(newProducts));
  }

  removeAllSelectedProduct() {
    sessionStorage.setItem("products", JSON.stringify([]));
  }


}
