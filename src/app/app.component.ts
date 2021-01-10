import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { NavigationService } from './core/services/navigation.service';
import { Payment } from './payment/models/payment.model';
import { PaymentService } from './shared/services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'credPay';
  isNavigated$: Observable<boolean>;
  paymentData: Payment;

  constructor(private navigationService: NavigationService, private paymentService: PaymentService) {
    navigationService.show();
    this.isNavigated$ = navigationService.isNavigated;
  }

  ngOnInit() {
    this.paymentData = JSON.parse(this.paymentService.paymentData);
  }
}
