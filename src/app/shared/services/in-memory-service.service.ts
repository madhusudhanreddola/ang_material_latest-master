import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService{

  constructor() { }

  createDb(): {} | Observable<{}> | Promise<{}> {
    const products = [
      {
        id: 1,
        name: 'Product One',
        gender: 'Male',
        size: 'M'
      },
      {id: 2, name: 'Product Two', gender: 'Female', size: 'S'},
      {id: 3, name: 'Product Three', gender: 'Male', size: 'XXL'}
    ];
    const prices = [
      {
        id: 1,
        vendor: 'Amazon',
        price: 'Rs. 499'
      },
      {
        id: 2,
        vendor: 'Flipkart',
        price: 'Rs. 599'
      }
    ];

    return {products, prices};
  }
}
