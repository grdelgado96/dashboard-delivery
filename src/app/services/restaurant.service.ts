import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import {RestaurantParams, Restaurant}from '../models/Restaurant';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  protected apiUrl: String;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  public createRestaurant(params:RestaurantParams,options: any = {}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    var body = {
      "name": params.name,
      "lat": params.lat,
      "lng": params.lng,
    };
    return this.http.post(this.apiUrl + "/api/restaurants",body,options);
  }

  public updateRestaurant(id:string, params:RestaurantParams,options: any = {}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    var body = {
      "name": params.name,
      "lat": params.lat,
      "lng": params.lng,
    };
    return this.http.put(this.apiUrl + "/api/restaurants/"+id,body,options);
  }
  public getRestaurantResource(options:any={}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    return this.http.get(this.apiUrl + "/api/restaurants", options);
  }
}
