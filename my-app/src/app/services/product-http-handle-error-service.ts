import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../classes/IProduct';

@Injectable({ providedIn: 'root' })
export class ProductHttpHandleErrorService {
  private readonly _url = '/dataset/products.json';

  constructor(private readonly _http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url).pipe(
      catchError((error) => {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        return throwError(() => new Error('Không thể tải danh sách sản phẩm.'));
      })
    );
  }
}
