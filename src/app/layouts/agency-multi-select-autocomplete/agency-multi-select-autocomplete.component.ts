import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

interface Agency {
  agencyId?: number;
  agencyName: string;
}

@Component({
  selector: 'app-agency-multi-select-autocomplete',
  templateUrl: './agency-multi-select-autocomplete.component.html',
  styleUrls: ['./agency-multi-select-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgencyMultiSelectAutocompleteComponent),
      multi: true
    }
  ]
})
export class AgencyMultiSelectAutocompleteComponent implements ControlValueAccessor, OnInit {
  public readonly SEPARATOR_KEY_CODES = [ENTER, COMMA];
  public agencies: Agency[] = [];
  public allAgencies: Agency[] = [
    {
      agencyId: 1,
      agencyName: 'First Agency'
    },
    {
      agencyId: 2,
      agencyName: 'Second Agency'
    },
    {
      agencyId: 3,
      agencyName: 'Third Agency'
    }
  ];
  public filteredAgencies: Observable<Agency[]>;
  public agencyControl = new FormControl();
  public agencyIds: number[];
  @ViewChild('agencyInput') agencyInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredAgencies = this.agencyControl.valueChanges.pipe(
      startWith(null),
      map((agency: Agency | null) => (agency ? this._filter(agency.agencyName) : this.allAgencies.slice())),
    );
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(val: number[]): void {
    this.agencyIds = val;

    if (val?.length > 0) {
      this.agencies = this.allAgencies.filter(agency => this.agencyIds?.indexOf(agency?.agencyId) !== -1);
    }
  }

  set value(val: number[]){
    this.agencyIds = val;
    if (val?.length > 0) {
      this.agencies = this.allAgencies.filter(agency => this.agencyIds?.indexOf(agency?.agencyId) !== -1);
    }
    this.onChange(val);
    this.onTouch(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      const foundAgencies = this.agencies.filter(agency => agency.agencyName === value);
      if (foundAgencies.length > 0) {
        this.agencies.push(foundAgencies[0]);
      }
    }
    event.input.value = '';

    this.agencyControl.reset();
    this.onChange(this.agencyIds);
  }

  public remove(agency: Agency): void {
    const index = this.agencies.indexOf(agency);

    if (index >= 0) {
      this.agencies.splice(index, 1);
    }
    this.agencyIds = this.agencies.map(agent => agent?.agencyId);
    this.onChange(this.agencyIds);
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.agencies.push(event.option.value);
    this.agencyInput.nativeElement.value = '';
    this.agencyControl.setValue(null);
    this.agencyIds = this.agencies.map(agency => agency?.agencyId);
    this.onChange(this.agencyIds);
  }

  private _filter(value: string): Agency[] {
    const filterValue = value?.toLowerCase();

    return this.allAgencies.filter(agency => agency.agencyName.toLowerCase().startsWith(filterValue));
  }
}
