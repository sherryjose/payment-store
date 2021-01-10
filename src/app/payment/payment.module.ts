import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PaymentDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaymentRoutingModule,
    SharedModule
  ]
})
export class PaymentModule { }
