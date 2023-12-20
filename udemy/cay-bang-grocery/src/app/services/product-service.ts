import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductFilterResult } from '../models/product-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
  }


  getProducts(): Observable<ProductFilterResult> {
    return this.http.get<ProductFilterResult>(`${this.apiUrl}/v1/products`, {params: {pageNumber: 0, pageSize: 18}});
  }

}
