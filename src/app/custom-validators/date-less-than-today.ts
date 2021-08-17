import { FormControl, ValidationErrors } from '@angular/forms';

export class DateLessThanToday {

  static notDateNow(control: FormControl): ValidationErrors {
    const now = new Date().getTime();
    const value = new Date(control.value).getTime();

    if (value <= now) {
      return null;
    }
    else {
      return { notDateNow: true };
    }
  }
}
