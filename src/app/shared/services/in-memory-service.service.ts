import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}

  createDb(): {} | Observable<{}> | Promise<{}> {
    const products = [
      { productId: 1, name: 'Product One', gender: 'Male', size: 'M' },
      { productId: 2, name: 'Product Two', gender: 'Female', size: 'S' },
      { productId: 3, name: 'Product Three', gender: 'Male', size: 'XXL' },
      { productId: 4, name: 'Product Four', gender: 'Female', size: 'XL' },
      { productId: 5, name: 'Product Five', gender: 'Male', size: 'XXL' },
      { productId: 6, name: 'Product Six', gender: 'Male', size: 'L' },
      { productId: 7, name: 'Product Seven', gender: 'Female', size: 'XXXL' },
      { productId: 8, name: 'Product Eight', gender: 'Male', size: 'M' },
      { productId: 9, name: 'Product Nine', gender: 'Female', size: 'S' },
      { productId: 10, name: 'Product Ten', gender: 'Female', size: 'L' },
    ];
    const prices = [
      {
        priceId: 1,
        vendor: 'Amazon',
        price: 499,
        productId: 1,
      },
      {
        priceId: 2,
        vendor: 'Flipkart',
        price: 599,
        productId: 1,
      },
      {
        priceId: 3,
        vendor: 'Snapdeal',
        price: 599,
        productId: 2,
      },
      {
        priceId: 4,
        vendor: 'Myntra',
        price: 599,
        productId: 3,
      },
      {
        priceId: 5,
        vendor: 'Ajio',
        price: 599,
        productId: 4,
      },
    ];

    return { products, prices };
  }
}
