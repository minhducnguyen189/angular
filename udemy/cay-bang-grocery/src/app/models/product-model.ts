
export interface FileDetail {
    id: string,
    fileName: string,
    fileExtension: string,
    mediaType: string,
    fileUrl: string,
    createdAt: Date,
    updatedAt: Date
}

export interface Product {
    id: string,
    name: string,
    summary: string,
    description: string,
    price: number,
    rating: number,
    categories: string[],
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