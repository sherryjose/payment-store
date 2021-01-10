import { ModuleWithProviders, NgModule } from '@angular/core';
import { PaymentService } from './services/payment.service';

@NgModule({})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [PaymentService]
    };
  }
}
