import { IProduct } from './../services/products.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(products: IProduct[], search: string = '') {
    if (!search.trim()) return products;

    return products.filter(product => {
      return product.t.toLowerCase().includes(search.toLowerCase());
    });
  }
}
