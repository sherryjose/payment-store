import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { dateValidator } from 'src/app/core/forms/date.validator';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  paymentDetailsForm: FormGroup;

  @HostListener('window:popstate')
  onPopState() {
    this.navigationService.show();
  }

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService, private navigationService: NavigationService) {
    navigationService.hide();
  }

  ngOnInit(): void {
    this.createPaymentForm();
  }

  createPaymentForm() {
    this.paymentDetailsForm = this.formBuilder.group({
      creditCardNumber: [null, [Validators.required, Validators.pattern('[0-9]+')]],
      cardHolder: [null, Validators.required],
      expirationDate: [null, [Validators.required, dateValidator]],
      cvv: [null, [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('[0-9]+')]],
      amount: [null, [Validators.required, Validators.min(1)]]
    })
  }

  isFieldInvalid(field) {
    return this.paymentDetailsForm.get(field).invalid &&
      (this.paymentDetailsForm.get(field).dirty || this.paymentDetailsForm.get(field).touched);
  }

  onPay(event) {
    event.preventDefault();
    if (this.paymentDetailsForm.valid) {
      const dateArgs = this.paymentDetailsForm.controls.expirationDate.value.split('/');
      let paymentData: Payment;
      paymentData = Object.assign(this.paymentDetailsForm.value, {
        expirationDate: new Date(dateArgs[2], dateArgs[1], dateArgs[0])
      });
      this.paymentService.setPaymentData(paymentData);
      location.href = location.href.substring(0, location.href.length - 7);
    }
  }
}
