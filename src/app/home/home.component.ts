import { ProductsCartService } from './../../services/products-cart.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  search = '';

  constructor(
    public productsService: ProductsService,
    public productsCartService: ProductsCartService
  ) {}

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe();
  }
}
