import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';

export class CustomValidators {

  public static validateCustomLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value?.length <= maxLength ? null : {
        overTheLength: true
      };
    };
  }
}
