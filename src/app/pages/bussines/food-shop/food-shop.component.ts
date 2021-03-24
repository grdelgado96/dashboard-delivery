import { AfterViewInit, Component, Input, NgZone, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AutocompleteComponent } from '../google-places/google-places.component';
import { ImageUploadComponent } from 'angular2-image-upload';
import { RestaurantParams, Restaurant } from '../../../models/Restaurant';
import { RestaurantService } from '../../../../../src/app/services/restaurant.service'
import { Shops, ShopsParams } from '../../../models/Shops';
import { ShopsService } from '../../../../../src/app/services/shops.service'
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector: 'ngx-food-shop',
  templateUrl: './food-shop.component.html',
  styleUrls: ['./food-shop.component.scss']
})
export class FoodShopComponent implements OnInit {
  @Input() actionrest: boolean;
  @Input() flagImage: boolean;
  @ViewChild(AutocompleteComponent) child;
  address: Object;
  establishmentAddress: Object;

  formattedAddress: string;
  formattedEstablishmentAddress: string;

  phone: string;

  lat: number;
  long: number;

  name: string = "";
  bussines_type: string;

  restaurant: Restaurant;
  shop: Shops;

  idSetImage:string="";

  

  constructor(public zone: NgZone, private restaurantService: RestaurantService, private shopService: ShopsService) { }

  ngOnInit(): void {
    this.getbussinestype();
  }

  getbussinestype() {
    if (localStorage.getItem("type") == "type_food")
      this.bussines_type = "Restaurant";
    else
      this.bussines_type = "Shop";
  }

  createRestaurant() {
    let params: RestaurantParams = <RestaurantParams>{};
    params.name = this.name;
    params.lat = this.lat.toString();
    params.lng = this.long.toString();
    if (this.name != null && this.lat != null && this.long != null) {
      this.restaurantService.createRestaurant(params).subscribe((resp: any) => {
        this.restaurant = resp;
        if (this.restaurant != null) {
          console.log(resp);
          this.idSetImage=this.restaurant.id;
          console.log(this.idSetImage);
          this.flagImage = true;
        }
      }, error => {
        console.log(error);

      })
    }

  }
  updateRestaurant() {
    let params: RestaurantParams = <RestaurantParams>{};
    params.name = this.name;
    params.lat = this.lat.toString();
    params.lng = this.long.toString();
    if (params != null && this.restaurant.id != null) {
      this.restaurantService.updateRestaurant(this.restaurant.id, params).subscribe((resp: any) => {
        this.restaurant = resp;
        if (this.restaurant != null) {
          console.log(resp);
          this.idSetImage=this.restaurant.id;
          console.log(this.idSetImage);
          this.flagImage = true;
        }
      }, error => {
        console.log(error);

      })
    }

  }
  createShop() {
    let params: ShopsParams = <ShopsParams>{};
    params.name = this.name;
    params.lat = this.lat.toString();
    params.lng = this.long.toString();
    if (this.name != null && this.lat != null && this.long != null) {
      this.shopService.createShop(params).subscribe((resp: any) => {
        this.shop = resp;
        if (this.shop != null) {
          console.log(resp);
          this.idSetImage=this.shop.id;
          console.log(this.idSetImage);
          this.flagImage = true;
        }
      }, error => {
        console.log(error);

      })
    }

  }
  updateShop() {
    let params: ShopsParams = <ShopsParams>{};
    params.name = this.name;
    params.lat = this.lat.toString();
    params.lng = this.long.toString();
    if (params != null && this.shop.id != null) {
      this.shopService.updateShop(this.shop.id, params).subscribe((resp: any) => {
        this.shop = resp;
        if (this.shop != null) {
          console.log(resp);
          this.idSetImage=this.shop.id;
          console.log(this.idSetImage);
          this.flagImage = true;
        }
      }, error => {
        console.log(error);

      })
    }

  }
  ngOnChanges(changes: SimpleChanges) {
    //press the botton
    if (this.actionrest == true) {
      //check type bussines
      if (this.bussines_type == "type_food") {
        // create or update restaurant
        if (this.restaurant == null) {
          this.createRestaurant();
        } else {
          this.updateRestaurant();
        }
        console.log("changerest action to true");
      } else {
        //create or update shop
        if (this.shop == null) {
          this.createShop();
        } else {
          this.updateShop();
        }
        console.log("changerest action to true");
      }
    } else {
      console.log("changerest action to false");
    }
  }
  getAddress(place: object) {
    this.address = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedAddress = place['formatted_address'];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
    this.lat = this.child.lat;
    this.long = this.child.long;

  }
  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  getStreetNumber(place) {
    const COMPONENT_TEMPLATE = { street_number: 'short_name' },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  getStreet(place) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  getState(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  getPhone(place) {
    const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }



}
