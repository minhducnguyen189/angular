
export interface FileDetail {
    id: String,
    fileName: String,
    fileExtension: String,
    mediaType: String,
    fileUrl: String,
    createdAt: Date,
    updatedAt: Date
}

export interface Product {
    id: String,
    name: String,
    summary: String,
    description: String,
    price: number,
    rating: number,
    categories: String[],
    images: FileDetail[],
    createdAt: Date,
    updatedAt: Date
}

export interface ProductOverview {
    isAddedToCart: boolean,
    orderQuantity: number,
    product: Product
}

export interface ProductFilterResult {
    products: Product[],
    foundNumber: number,
    total: number
 }