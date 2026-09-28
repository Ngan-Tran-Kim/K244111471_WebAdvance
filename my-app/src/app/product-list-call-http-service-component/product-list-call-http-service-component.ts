import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductHttpService } from '../services/product-http-service';

@Component({
  selector: 'app-product-list-call-http-service-component',
  standalone: false,
  styleUrl: './product-list-call-http-service-component.css',
  templateUrl: './product-list-call-http-service-component.html',
})
export class ProductListCallHttpServiceComponent implements OnInit {
  products: Product[] = [];

  constructor(private readonly _service: ProductHttpService) {}

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err: unknown) => {
        alert('Lỗi: ' + JSON.stringify(err));
      },
    });
  }

  isNegativePrice(price: number): boolean {
    return price < 0;
  }
}