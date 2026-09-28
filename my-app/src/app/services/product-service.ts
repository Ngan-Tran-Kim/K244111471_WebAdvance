import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Coca', price: 15, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png' },
    { id: 2, name: 'Pepsi', price: -10, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pepsi_logo.svg/2560px-Pepsi_logo.svg.png' },
    { id: 3, name: 'Redbull', price: 20, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Red_Bull_logo.svg/2560px-Red_Bull_logo.svg.png' },
    { id: 4, name: 'Aqua', price: -17, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Aqua_logo.svg/2560px-Aqua_logo.svg.png' },
    { id: 5, name: 'Lavie', price: 12, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lavie_logo.svg/2560px-Lavie_logo.svg.png' }
  ];

  productsImage = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/h1.png' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/h2.png' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/h3.png' }
  ];

  constructor() {}

  getProductList(): Product[] {
    return this.products;
  }

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find((x) => x.ProductId === id);
  }

  filterProductListByPrice(min: number, max: number): Product[] {
    return this.products.filter((p) => p.price >= min && p.price <= max);
  }
}
