import { Component, OnInit } from '@angular/core';
import { Bussines } from '../../models/Bussines';
import { Restaurant } from '../../models/Restaurant';
import { Shops } from '../../models/Shops';
import { RestaurantService } from '../../services/restaurant.service';
import { ShopsService } from '../../services/shops.service';

@Component({
  selector: 'ngx-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  public restaurantList: Restaurant[] = [];
  public shopList: Shops[] = [];
  public flagshop:boolean=false;
  public flagrest:boolean=false;
  public currentBusinnes: Bussines= JSON.parse(localStorage.getItem('Current_Bussines'));
  constructor(private restaurantService: RestaurantService, private shopsService: ShopsService) { }

  ngOnInit(): void {
    if(this.currentBusinnes!= null && this.currentBusinnes.type=="type_food" ){
      this.getRestaurantResource();
    }else{
      if(this.currentBusinnes!= null && this.currentBusinnes.type== "type_shop"){
        this.getShopsResource();
      }
    }
    
  }

  getRestaurantResource() {
    this.restaurantService.getRestaurantResource().subscribe((resp: any) => {
      this.restaurantList = resp;
      if (this.restaurantList != null) {
        console.log(resp);
        this.flagrest=true;
      }
    }, error => {
      console.log(error);
    })
  }
  getShopsResource() {
    this.shopsService.getShopsResource().subscribe((resp: any) => {
      this.shopList = resp;
      if (this.shopList != null) {
        console.log(resp);
        this.flagshop=true;
      }
    }, error => {
      console.log(error);
    })
  }


}
