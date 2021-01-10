import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function dateValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value) {
        if (!moment(control.value, 'DD/MM/YYYY').isValid()) {
            return { dateFormat: true };
        } else {
            const today = moment();
            const expirationDate = moment(control.value, 'DD/MM/YYYY');
            return expirationDate.isAfter(today) ? null : { futureDate: true };
        }
    }
}