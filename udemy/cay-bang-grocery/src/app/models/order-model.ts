import { Product } from "./product-model";

export interface Order {
    quantity: number,
    selectedProduct: Product
}