import { Product } from "./product-model";

export interface ProductFilterResult {
   products: Product[],
   foundNumber: number,
   total: number
}