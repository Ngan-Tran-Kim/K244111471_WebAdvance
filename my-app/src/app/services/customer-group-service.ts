import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICustomerGroup } from '../classes/ICustomerGroup';

const fallbackCustomers: ICustomerGroup[] = [
  {
    CustomerTypeId: 1,
    CustomterTypeName: 'VIP',
    Customers: [
      {
        Id: 'Cus123',
        Name: 'Obama',
        Email: 'obama@gmail.com',
        Age: 67,
        Image: '/assets/avatars/obama-avatar.png',
      },
      {
        Id: 'Cus456',
        Name: 'Kim jong Un',
        Email: 'unun@gmail.com',
        Age: 38,
        Image: '/assets/avatars/unun-avatar.png',
      },
      {
        Id: 'Cus789',
        Name: 'Putin',
        Email: 'putin@gmail.com',
        Age: 77,
        Image: '/assets/avatars/putin-avatar.png',
      },
    ],
  },
  {
    CustomerTypeId: 2,
    CustomterTypeName: 'Normal',
    Customers: [
      {
        Id: 'Cus000',
        Name: 'Hồ Cẩm Đào',
        Email: 'hodao@gmail.com',
        Age: 16,
        Image: '/assets/avatars/hodao-avatar.png',
      },
      {
        Id: 'Cus111',
        Name: 'Tap Can Binh',
        Email: 'binhbinh@gmail.com',
        Age: 67,
        Image: '/assets/avatars/binhbinh-avatar.png',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class CustomerGroupService {
  constructor(private readonly _http: HttpClient) {}

  getCustomerGroups(): Observable<ICustomerGroup[]> {
    return this._http.get<ICustomerGroup[]>('/dataset/customers.json').pipe(
      catchError(() => of(fallbackCustomers))
    );
  }
}