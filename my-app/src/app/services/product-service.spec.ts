import { TestBed } from '@angular/core/testing';
import { ProductService } from './product-service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products with images', () => {
    const products = service.getProductsWithImages();

    expect(products.length).toBe(3);
    expect(products[0].ProductId).toBe('p1');
    expect(products[0].Image).toContain('assets/');
  });

  it('should return product detail by id', () => {
    const selectedProduct = service.getProductDetail('p2');

    expect(selectedProduct).toBeTruthy();
    expect(selectedProduct?.ProductName).toBe('Pepsi');
    expect(selectedProduct?.Price).toBe(300);
  });
});
