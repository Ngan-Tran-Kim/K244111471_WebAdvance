import { Component, OnInit } from '@angular/core';
import { ICustomerGroup } from '../classes/ICustomerGroup';
import { CustomerGroupService } from '../services/customer-group-service';

const defaultGroups: ICustomerGroup[] = [
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

@Component({
  selector: 'app-customer-group',
  standalone: false,
  templateUrl: './customer-group-component.html',
  styleUrl: './customer-group-component.css',
})
export class CustomerGroupComponent implements OnInit {
  groups: ICustomerGroup[] = defaultGroups;
  errMessage = '';

  constructor(private readonly _service: CustomerGroupService) {}

  ngOnInit(): void {
    this._service.getCustomerGroups().subscribe({
      next: (data: ICustomerGroup[]) => {
        this.groups = data;
      },
      error: (err: any) => {
        this.errMessage = err?.message ?? String(err);
      },
    });
  }
}