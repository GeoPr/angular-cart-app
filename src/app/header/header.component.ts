import { ProductsCartService } from './../../services/products-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links = [
    { title: 'Home', routerLink: ['/'] },
    { title: 'Cart', routerLink: ['/cart'] },
  ];

  constructor(public productsCartService: ProductsCartService) {}

  ngOnInit(): void {}
}
