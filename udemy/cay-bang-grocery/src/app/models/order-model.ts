import { FormControl } from "@angular/forms";

export interface Order {
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    phone: FormControl;
    address: FormControl;
    sex: FormControl;
}

export interface OrderRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    sex: string;
}

export interface OrderDetail {
    id: string,
    orderNumber: number,
    createdAt: Date,
    updatedAt: Date,
    customerName: string,
    address: string,
    phoneNumber: string,
    email: string,
    totalPrice: number,
}