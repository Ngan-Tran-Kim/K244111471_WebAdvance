import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
  styleUrl: './service-product-image-event.css'
})
export class ServiceProductImageEventComponent {
  public products: any[] = [];

  constructor(private pservice: ProductService, private router: Router) {
    this.products = this.pservice.getProductsWithImages();
  }

  viewDetail(product: any): void {
    this.router.navigate(['service-product-image-event', product.ProductId]);
  }
}
