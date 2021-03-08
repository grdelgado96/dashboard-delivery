import { Component, OnInit } from '@angular/core';
import { bussines } from '../../../../src/app/models/User'
import { DeliveryService } from '../../../../src/app/services/delivery.service'
import { BussinesService } from '../../../../src/app/services/bussines.service'

@Component({
  selector: 'ngx-bussines',
  styleUrls: ['./bussines.component.scss'],
  templateUrl: './bussines.component.html',
})
export class BussinesComponent implements OnInit {
  buss: bussines = JSON.parse(localStorage.getItem('bussines'));
  isnull: boolean;
  action: boolean = false;

  constructor(private deliveryService: DeliveryService, private bussinesService: BussinesService,) { }

  ngOnInit(): void {
    this.isnull = this.buss == null;
  }

  change() {
    this.action = !this.action;
  }


}
