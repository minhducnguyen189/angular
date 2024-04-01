import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderDetail, OrderRequest } from "../models/order-model";


@Injectable({
    providedIn: 'root'
  })
  export class OrderService {
    

    apiUrl = 'http://localhost:8080';


    constructor(private http: HttpClient) { }


    createOrder(orderRequest: OrderRequest): Observable<OrderDetail> {
        return this.http.post<OrderDetail>(`${this.apiUrl}/v1/orders`, orderRequest);
      }

  }