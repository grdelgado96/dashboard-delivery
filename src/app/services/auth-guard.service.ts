import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DeliveryService } from './delivery.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public deliveryservice: DeliveryService, public router: Router) { }
  canActivate(): boolean {
    if (!this.deliveryservice.isAuthenticated() ){
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
