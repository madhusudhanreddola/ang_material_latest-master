import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  gender: string;
  size: string;
  prices: Price[];
}

interface Price {
  id: number;
  vendor: string;
  price: string;
}

@Component({
  selector: 'app-nested-datatable',
  templateUrl: './nested-datatable.component.html',
  styleUrls: ['./nested-datatable.component.scss']
})
export class NestedDatatableComponent implements OnInit {
  @ViewChild('myTable') table: any;

  rows: Product[];
  columns = [{prop: 'name'}, {name : 'Gender'}, {name: 'Size'}];
  internalColumns = [{name: 'Vendor'}, {name: 'Price'}];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Product[]>('api/products')
      .subscribe(products => this.rows = products);
  }

  onSelectProduct($event): void {
    this.httpClient.get<Price[]>('api/prices')
      .subscribe(priceList => {
        $event.selected[0].prices = priceList;
        this.table.rowDetail.toggleExpandRow($event.selected[0]);
      });
  }
}
