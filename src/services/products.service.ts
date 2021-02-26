import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IProduct {
  id: number;
  img: string;
  t: string;
  tt: string;
  price: number;
  count: number;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  products: IProduct[] = [];

  constructor(private httpClient: HttpClient) {}

  fetchProducts(): Observable<{ products: IProduct[] }> {
    return this.httpClient
      .get<{ products: IProduct[] }>('assets/products.json')
      .pipe(
        tap(({ products }) => {
          this.products = products;
        })
      );
  }
}
