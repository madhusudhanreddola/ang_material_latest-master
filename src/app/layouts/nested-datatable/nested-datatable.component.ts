import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import * as XLSX from 'xlsx';
import {DatePipe} from '@angular/common';
import {DatatableComponent} from '@swimlane/ngx-datatable';

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
  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows: Product[];
  columns = [{prop: 'name'}, {name : 'Gender'}, {name: 'Size'}];
  internalColumns = [{name: 'Vendor'}, {name: 'Price'}];

  goToPage: number;

  constructor(private httpClient: HttpClient,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.httpClient.get<Product[]>('api/products')
      .subscribe(products => this.rows = products);
  }

  onSelectProduct($event): void {
    const httpParams = new HttpParams().set('productId', $event.selected[0]?.productId);

    this.httpClient.get<Price[]>('api/prices', {params: httpParams})
      .subscribe(priceList => {
        $event.selected[0].prices = priceList;
        this.table.rowDetail.toggleExpandRow($event.selected[0]);
      });
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.rows);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, `Export-${this.datePipe.transform(new Date(), 'ddMMyyyy_HHmmss')}.xlsx`);
  }

  getHeight(row: any, index: number): number {
    return row?.prices?.length * 2;
  }
}
