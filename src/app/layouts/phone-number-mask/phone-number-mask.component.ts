import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {conformToMask} from 'angular2-text-mask';

@Component({
  selector: 'app-phone-number-mask',
  templateUrl: './phone-number-mask.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhoneNumberMaskComponent,
      multi: true
    }
  ]
})
export class PhoneNumberMaskComponent implements ControlValueAccessor, OnInit {
  public myModel: string;
  public conformedValue: string;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor() { }

  public onChange = (val: any) => {};
  public onTouched = () => {};

  ngOnInit(): void {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  public get value(): string {
    return this.myModel;
  }

  public set value(val: string) {
    this.myModel = val;
    this.conformedValue = val;

    if (!val) {
      this.onChange(undefined);
    } else {
      this.conformedValue = conformToMask(val, this.mask, true).conformedValue;
      this.onChange(this.conformedValue);
    }
  }
}
