import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DeliveryService } from './delivery.service';


@Injectable({
  providedIn: 'root'
})
export class RemembermeGuardService implements CanActivate{
  constructor(public deliveryservice: DeliveryService, public router: Router) { }
  canActivate(): boolean {
    if (this.deliveryservice.isGranted()){
      this.router.navigate(['/pages']);
      return false;
    }
    return true;
  }
}
