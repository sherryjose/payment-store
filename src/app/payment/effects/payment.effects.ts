/* to use later */
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Effect, Actions, ofType } from '@ngrx/effects';
// import { switchMap, catchError, map } from 'rxjs/operators';
// import { of } from 'rxjs';

// import * as PaymentActions from '../actions/payment.actions';
// import { Payment } from '../models/payment.model';

// @Injectable()
// export class PaymentEffect {

//     baseUrl: string = 'http://localhost:8080'

//     constructor(
//         private httpClient: HttpClient,
//         private actions$: Actions
//     ) {
//     }

//     @Effect()
//     addPayment = this.actions$.pipe(
//         ofType(PaymentActions.START_ADD_PAYMENT),
//         switchMap((actionData: PaymentActions.StartAddPayment) => {
//             return this.httpClient.post<Payment>(`${this.baseUrl}/payment`, actionData.payload).pipe(
//                 map(responseData => {
//                     return new PaymentActions.AddPayment(responseData);
//                 }),
//                 catchError(error => {
//                     return of();
//                 })
//             )
//         })
//     );


// }