import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-dropdown-list-component',
  standalone: false,
  styleUrl: './product-dropdown-list-component.css',
  templateUrl: './product-dropdown-list-component.html',
})
export class ProductDropdownListComponent {
    products:Product[]=[
      {id:1,name:"Coca",price:15,imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"},
      {id:2,name:"Pepsi",price:-10,imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pepsi_logo.svg/2560px-Pepsi_logo.svg.png"},
      {id:3,name:"Redbull",price:20,imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Red_Bull_logo.svg/2560px-Red_Bull_logo.svg.png"},
      {id:4,name:"Aqua",price:-17,imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Aqua_logo.svg/2560px-Aqua_logo.svg.png"},
      {id:5,name:"Lavie",price:12,imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lavie_logo.svg/2560px-Lavie_logo.svg.png"}
    ];
}
