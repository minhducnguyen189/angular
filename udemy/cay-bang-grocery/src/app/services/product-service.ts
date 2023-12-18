import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductFilterResult } from '../models/product-filter-result-model';

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
