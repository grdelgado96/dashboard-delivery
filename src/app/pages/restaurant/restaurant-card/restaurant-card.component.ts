import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Restaurant } from '../../../models/Restaurant';
import { GooglemapsService } from '../../../services/googlemaps.service'
@Component({
  selector: 'ngx-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
  currentTheme: string;
  themeSubscription: any;
  @Input() restaurant: Restaurant;
  public address: any;
  flag: boolean = true;
  //@Output() restaurantitem = new EventEmitter<RestaurantList>();
  constructor(private themeService: NbThemeService, private googlemapsService: GooglemapsService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnInit(): void {
    //this.getAddress();
    this.setflag();

  }

  getAddress() {
    this.googlemapsService.getAddress(this.restaurant.lat, this.restaurant.lng)

  }
  setflag() {
    if (this.restaurant.image != null) {
      this.flag = false;
    }
  }



}
