import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-catalog-product-component',
  standalone: false,
  templateUrl: './catalog-product-component.html',
  styleUrl: './catalog-product-component.css'
})
export class CatalogProductComponent {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}
