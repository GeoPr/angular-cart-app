import { ProductsCartService } from './../../services/products-cart.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, DoCheck {
  sum = 0;

  constructor(public productsCartService: ProductsCartService) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.sum = this.getSum();
  }

  getSum(): number {
    return this.productsCartService.products.reduce((acc, { count, price }) => {
      acc += price * count;
      return acc;
    }, 0);
  }
}
