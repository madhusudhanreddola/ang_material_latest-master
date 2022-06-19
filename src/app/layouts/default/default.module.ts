import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from 'src/app/modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from 'src/app/modules/posts/posts.component';
import {SharedModule} from 'src/app/shared/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {
  AgencyMultiSelectAutocompleteComponent
} from '../agency-multi-select-autocomplete/agency-multi-select-autocomplete.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NestedDatatableComponent} from '../nested-datatable/nested-datatable.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {PhoneNumberMaskComponent} from '../phone-number-mask/phone-number-mask.component';
import {TextMaskModule} from 'angular2-text-mask';
import {MadhuTestLibModule} from 'madhu-test-lib';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    AgencyMultiSelectAutocompleteComponent,
    NestedDatatableComponent,
    PhoneNumberMaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    TextMaskModule,
    MadhuTestLibModule
  ]
})
export class DefaultModule { }
