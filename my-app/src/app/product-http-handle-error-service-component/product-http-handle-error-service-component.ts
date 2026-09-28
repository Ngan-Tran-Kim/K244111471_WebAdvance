import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  styleUrl: './product-http-handle-error-service-component.css',
  templateUrl: './product-http-handle-error-service-component.html',
})
export class ProductHttpHandleErrorServiceComponent implements OnInit {
  products = signal<Product[]>([]);
  errMessage = signal('');

  constructor(private readonly _service: ProductHttpHandleErrorService) {}

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data: Product[]) => {
        this.products.set(data);
      },
      error: (err: unknown) => {
        this.errMessage.set(err instanceof Error ? err.message : JSON.stringify(err));
      },
    });
  }
}

