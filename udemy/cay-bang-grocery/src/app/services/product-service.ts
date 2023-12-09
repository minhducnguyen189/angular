import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsMock: Product[] = [
    {
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 10000,
      rating: 5
    },
    {
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 9000,
      rating: 4
    },
    {
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 10000,
      rating: 5
    },
    {
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 10000,
      rating: 5
    },
    {
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 10000,
      rating: 5
    },
    {
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 10000,
      rating: 5
    },
    {
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 9000,
      rating: 4
    },
    {
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 9000,
      rating: 4
    },
    {
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 9000,
      rating: 4
    },
    {
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      description: "Nước giải khát Coca Cola lon 330ml",
      price: 9000,
      rating: 4
    },
  ] 

  private products = of(this.productsMock);

  constructor() { }


  getProducts(): Observable<Product[]> {
    return this.products;
  }

}
