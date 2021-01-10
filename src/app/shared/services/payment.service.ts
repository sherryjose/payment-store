import { Injectable } from '@angular/core';
import { Payment } from 'src/app/payment/models/payment.model';

@Injectable()
export class PaymentService {

  constructor() { }

  get paymentData() {
    return sessionStorage.getItem('payment');
  }

  setPaymentData(payment: Payment) {
    sessionStorage.setItem('payment', JSON.stringify(payment));
  }
}
