import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  templateUrl: './product-list-call-service-component.html',
  styleUrl: './product-list-call-service-component.css'
})
export class ProductListCallServiceComponent implements OnInit {
  minPrice: number = 0;
  maxPrice: number = 100;
  products: Product[] = [];

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.ps.getProductList();
  }
  callFilterProductListByPrice()
    {
        this.products=this.ps.filterProductListByPrice(this.minPrice, this.maxPrice);
    }

}

