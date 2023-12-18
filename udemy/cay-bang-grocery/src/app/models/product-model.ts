import { FileDetail } from "./file-detail-model";

export interface Product {
    id: String,
    name: String,
    image: String,
    summary: String,
    description: String,
    price: number,
    rating: number,
    categories: String[],
    images: FileDetail[],
    createdAt: Date,
    updatedAt: Date
}