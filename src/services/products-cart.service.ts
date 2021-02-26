import { IProduct } from './products.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductsCartService {
  products: IProduct[] = [];

  constructor() {}

  add(product: IProduct) {
    const candidate = this.getCandidate(product.id);

    if (candidate) {
      candidate.count++;
    } else {
      this.products.push(product);
    }
  }

  remove(id: number) {
    const candidate = this.getCandidate(id)!;

    if (candidate.count > 1) {
      candidate.count--;
    } else {
      this.products = this.products.filter((p) => p.id !== id);
    }
  }

  getCandidate(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
