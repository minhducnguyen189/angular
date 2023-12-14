import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsMock: Product[] = [
    {
      id: "b73f0664-cfa3-437b-9041-f88cbd0ed5de",
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      summary: "Nước giải khát Coca Cola lon 330ml",
      description: "Nước Ngọt Có Gas Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái nhất sau mỗi lần sử dụng nên đặc biệt thích hợp sử dụng khi hoạt động nhiều ngoài trời. Sản phẩm được ưa chuộng bởi thực khách nhiều lứa tuổi trên toàn thế giới. Sản phẩm đã được đóng chai tiện lợi, dễ dàng mang đi và sử dụng khi vui chơi, hoạt động thể thao. Thành phần: Nước bão hòa CO2, đường HFCS, đường mía, màu thực phẩm, chất điều chỉnh độ acid, hương cola tự nhiên, caffeine.",
      price: 10000,
      rating: 5,
      categories: ["drink"]
    },
    {
      id: "e98ef2da-7cd7-4fbe-bdf6-cb35a9407bf1",
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      summary: "Splash (Cam ép Lon) 320 ml",
      description: "Nước ép cam Minute maid Splash là loại nước cam có tép khác biệt hẳn với các sản phẩm nước cam ép còn lại bởi vị cam tươi ngon, hương cam thơm mát và màu cam hoàn toàn tự nhiên. Mang hương vị tươi nguyên từ thiên nhiên, Minute Maid Splash là thức uống tuyệt hảo rất phù hợp với nhu cầu tiêu dùng thông minh hiện nay.Trong nước cam còn chứa nhiều hợp chất khác có khả năng chống oxy hóa cao hơn gấp 6 lần so với vitamin C như: hesperidin từ flavonoid, có nhiều trong lớp vỏ xơ trắng, màng bao múi cam và một ít trong tép và hạt cam, giúp giảm cholesterol xấu và tăng cholesterol tốt. Do đó, với lượng dưỡng chất trong nước cam luôn được được tiêu thụ khá phổ biến ở cả dạng nước cam đóng chai lẫn nước cam vắt.",
      price: 9000,
      rating: 4,
      categories: ["drink"]
    },
    {
      id: "2b95f825-69bc-4386-9b4e-7fcf9f7a4a5f",
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      summary: "Nước giải khát Coca Cola lon 330ml",
      description: "Nước Ngọt Có Gas Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái nhất sau mỗi lần sử dụng nên đặc biệt thích hợp sử dụng khi hoạt động nhiều ngoài trời. Sản phẩm được ưa chuộng bởi thực khách nhiều lứa tuổi trên toàn thế giới. Sản phẩm đã được đóng chai tiện lợi, dễ dàng mang đi và sử dụng khi vui chơi, hoạt động thể thao. Thành phần: Nước bão hòa CO2, đường HFCS, đường mía, màu thực phẩm, chất điều chỉnh độ acid, hương cola tự nhiên, caffeine.",
      price: 10000,
      rating: 5,
      categories: ["drink"]
    },
    {
      id: "e9291449-38ad-4169-ba8f-ae572e9e4d8e",
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      summary: "Nước giải khát Coca Cola lon 330ml",
      description: "Nước Ngọt Có Gas Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái nhất sau mỗi lần sử dụng nên đặc biệt thích hợp sử dụng khi hoạt động nhiều ngoài trời. Sản phẩm được ưa chuộng bởi thực khách nhiều lứa tuổi trên toàn thế giới. Sản phẩm đã được đóng chai tiện lợi, dễ dàng mang đi và sử dụng khi vui chơi, hoạt động thể thao. Thành phần: Nước bão hòa CO2, đường HFCS, đường mía, màu thực phẩm, chất điều chỉnh độ acid, hương cola tự nhiên, caffeine.",
      price: 10000,
      rating: 5,
      categories: ["drink"]
    },
    {
      id: "7d310941-d3a6-49c2-95fe-1e2339582121",
      name: "Coca Cola",
      image: "https://hcm.fstorage.vn/images/2022/9c46dfa9-a2fa-4ff8-a4f5-f1d6324bc71d_20210831032155-og.jpg",
      summary: "Nước giải khát Coca Cola lon 330ml",
      description: "Nước Ngọt Có Gas Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái nhất sau mỗi lần sử dụng nên đặc biệt thích hợp sử dụng khi hoạt động nhiều ngoài trời. Sản phẩm được ưa chuộng bởi thực khách nhiều lứa tuổi trên toàn thế giới. Sản phẩm đã được đóng chai tiện lợi, dễ dàng mang đi và sử dụng khi vui chơi, hoạt động thể thao. Thành phần: Nước bão hòa CO2, đường HFCS, đường mía, màu thực phẩm, chất điều chỉnh độ acid, hương cola tự nhiên, caffeine.",
      price: 10000,
      rating: 5,
      categories: ["drink"]
    },
    {
      id: "62a14e23-8748-49e8-bf5e-3c853975028c",
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      summary: "Splash (Cam ép Lon) 320 ml",
      description: "Nước ép cam Minute maid Splash là loại nước cam có tép khác biệt hẳn với các sản phẩm nước cam ép còn lại bởi vị cam tươi ngon, hương cam thơm mát và màu cam hoàn toàn tự nhiên. Mang hương vị tươi nguyên từ thiên nhiên, Minute Maid Splash là thức uống tuyệt hảo rất phù hợp với nhu cầu tiêu dùng thông minh hiện nay.Trong nước cam còn chứa nhiều hợp chất khác có khả năng chống oxy hóa cao hơn gấp 6 lần so với vitamin C như: hesperidin từ flavonoid, có nhiều trong lớp vỏ xơ trắng, màng bao múi cam và một ít trong tép và hạt cam, giúp giảm cholesterol xấu và tăng cholesterol tốt. Do đó, với lượng dưỡng chất trong nước cam luôn được được tiêu thụ khá phổ biến ở cả dạng nước cam đóng chai lẫn nước cam vắt.",
      price: 9000,
      rating: 4,
      categories: ["drink"]
    },
    {
      id: "2398932e-66fd-49ed-86eb-f5fdc9228881",
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      summary: "Splash (Cam ép Lon) 320 ml",
      description: "Nước ép cam Minute maid Splash là loại nước cam có tép khác biệt hẳn với các sản phẩm nước cam ép còn lại bởi vị cam tươi ngon, hương cam thơm mát và màu cam hoàn toàn tự nhiên. Mang hương vị tươi nguyên từ thiên nhiên, Minute Maid Splash là thức uống tuyệt hảo rất phù hợp với nhu cầu tiêu dùng thông minh hiện nay.Trong nước cam còn chứa nhiều hợp chất khác có khả năng chống oxy hóa cao hơn gấp 6 lần so với vitamin C như: hesperidin từ flavonoid, có nhiều trong lớp vỏ xơ trắng, màng bao múi cam và một ít trong tép và hạt cam, giúp giảm cholesterol xấu và tăng cholesterol tốt. Do đó, với lượng dưỡng chất trong nước cam luôn được được tiêu thụ khá phổ biến ở cả dạng nước cam đóng chai lẫn nước cam vắt.",
      price: 9000,
      rating: 4,
      categories: ["drink"]
    },
    {
      id: "4c9727ac-f21d-4044-8606-cdd6e3f74d0e",
      name: "Slapsh Coca",
      image: "https://hcm.fstorage.vn/images/2022/8935049501480_71bc2778-fb9f-403e-9602-46b6796bb012-og.jpg",
      summary: "Splash (Cam ép Lon) 320 ml",
      description: "Nước ép cam Minute maid Splash là loại nước cam có tép khác biệt hẳn với các sản phẩm nước cam ép còn lại bởi vị cam tươi ngon, hương cam thơm mát và màu cam hoàn toàn tự nhiên. Mang hương vị tươi nguyên từ thiên nhiên, Minute Maid Splash là thức uống tuyệt hảo rất phù hợp với nhu cầu tiêu dùng thông minh hiện nay.Trong nước cam còn chứa nhiều hợp chất khác có khả năng chống oxy hóa cao hơn gấp 6 lần so với vitamin C như: hesperidin từ flavonoid, có nhiều trong lớp vỏ xơ trắng, màng bao múi cam và một ít trong tép và hạt cam, giúp giảm cholesterol xấu và tăng cholesterol tốt. Do đó, với lượng dưỡng chất trong nước cam luôn được được tiêu thụ khá phổ biến ở cả dạng nước cam đóng chai lẫn nước cam vắt.",
      price: 9000,
      rating: 4,
      categories: ["drink"]
    },
  ]

  private products = of(this.productsMock);

  constructor() { }


  getProducts(): Observable<Product[]> {
    return this.products;
  }

}
