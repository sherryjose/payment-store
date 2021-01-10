import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navSubject = new BehaviorSubject<boolean>(true);

  constructor() { }
  
  get isNavigated() {
    return this.navSubject.asObservable();
  }

  hide() {
    this.navSubject.next(true);
  }

  show() {
    this.navSubject.next(false);
  }
}
